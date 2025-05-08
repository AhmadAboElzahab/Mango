import Table from 'components/UI/Table';
import TabsBar from 'components/UI/TabsBar';
import Toolbar from 'components/UI/Toolbar';
import { useInfiniteModelIndex } from 'core/services/data.service';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { UserTab } from 'types/tabs';

import type { DataContainerProps } from './DataContainer.types';

const DataContainer: React.FC<DataContainerProps> = ({ model, tabsData }) => {
  const [activeTab, setActiveTab] = useState<UserTab>(tabsData.tabs?.[0]);
  const [columns, setColumns] = useState(() => activeTab?.columns ?? []);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const shortContentCheckTriggered = useRef(false);

  const handleTabChange = (tab: UserTab) => {
    setActiveTab(tab);
    setColumns(tab.columns);
    shortContentCheckTriggered.current = false; // Reset for new tab
  };

  const toggleColumnVisibility = useCallback((fieldKey: string) => {
    setColumns((prev) =>
      prev.map((col) => (col.field_key === fieldKey ? { ...col, visible: !col.visible } : col)),
    );
  }, []);

  const queryParams = useMemo(
    () => ({
      tab_id: activeTab?.id,
      model,
      filters: activeTab?.filters ?? {},
      search_term: activeTab?.search_term ?? '',
      columns,
    }),
    [activeTab, model, columns],
  );

  const { data, fetchNextPage, isFetching, isLoading, hasNextPage } =
    useInfiniteModelIndex(queryParams);

  const flatData = useMemo(() => data?.pages.flatMap((p) => p.data) ?? [], [data]);
  const totalCount = data?.pages?.[0]?.meta?.totalRowCount ?? 0;

  // Auto-fetch if short content on first mount or tab change
  useEffect(() => {
    if (shortContentCheckTriggered.current || !hasNextPage || isFetching) return;

    const wrapper = document.getElementById('data-container-scroll');
    if (!wrapper) return;

    const needsMoreData =
      wrapper.scrollHeight <= wrapper.clientHeight && flatData.length < totalCount;

    if (needsMoreData) {
      console.log('📦 Auto-fetch for short content');
      fetchNextPage();
      shortContentCheckTriggered.current = true;
    }
  }, [flatData.length, totalCount, isFetching, fetchNextPage, hasNextPage]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const sentinel = sentinelRef.current;
    const scrollContainer = document.getElementById('data-container-scroll');
    if (!sentinel || !scrollContainer || !hasNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetching && hasNextPage) {
          console.log('🧲 Observer triggered next page');
          fetchNextPage();
        }
      },
      {
        root: scrollContainer,
        rootMargin: '300px',
      },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [fetchNextPage, isFetching, hasNextPage]);

  if (isLoading) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TabsBar tabs={tabsData.tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      <Toolbar key={activeTab?.id} columns={columns} onToggleColumn={toggleColumnVisibility} />
      <div id='data-container-scroll' style={{ flex: 1, overflowY: 'auto' }}>
        <Table
          data={flatData}
          formFields={tabsData.form_fields}
          activeTabColumns={columns}
          totalCount={totalCount}
        />
        <div ref={sentinelRef} style={{ height: 1 }} />
      </div>
    </div>
  );
};

export default DataContainer;
