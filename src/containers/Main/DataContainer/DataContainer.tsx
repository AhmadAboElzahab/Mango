import React, { useCallback, useMemo, useRef, useState } from 'react';
import Table from 'components/UI/Table';
import TabsBar from 'components/UI/TabsBar';
import Toolbar from 'components/UI/Toolbar';
import { useInfiniteModelIndex } from 'core/services/data.service';

import type { DataContainerProps } from './DataContainer.types';
import type { UserTab } from 'types/tabs';
import { useAutoFetchIfShort, useInfiniteScrollObserver } from 'hooks/useInfiniteHelpers';

const DataContainer: React.FC<DataContainerProps> = ({ model, tabsData }) => {
  const [activeTab, setActiveTab] = useState<UserTab>(tabsData.tabs?.[0]);
  const [columns, setColumns] = useState(() => activeTab?.columns ?? []);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const handleTabChange = useCallback((tab: UserTab) => {
    setActiveTab(tab);
    setColumns(tab.columns);
  }, []);

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

  useAutoFetchIfShort(flatData.length, totalCount, fetchNextPage, hasNextPage, isFetching);
  useInfiniteScrollObserver(sentinelRef, fetchNextPage, isFetching, hasNextPage);

  if (isLoading) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TabsBar tabs={tabsData.tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      <Toolbar key={activeTab?.id} columns={columns} onToggleColumn={toggleColumnVisibility} />
      <div
        id='data-container-scroll'
        style={{
          flex: 1,
          overflowY: 'auto',
          position: 'relative',
        }}
      >
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
