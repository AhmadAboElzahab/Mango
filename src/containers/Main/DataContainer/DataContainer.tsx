import React, { useCallback, useMemo } from 'react';
import { useRouter } from '@tanstack/react-router';

import Table from 'components/UI/Table';
import TabsBar from 'components/UI/TabsBar';
import Toolbar from 'components/UI/Toolbar';
import { PAGE_SIZE, usePaginatedModelIndex } from 'core/services/data.service';

import { useValidatedPageQuery } from 'hooks/useValidatedPageQuery';
import type { UserTab } from 'types/tabs';
import type { DataContainerProps } from './DataContainer.types';

const DataContainer: React.FC<DataContainerProps> = ({ model, tabsData }) => {
  const router = useRouter();
  const { page } = useValidatedPageQuery(); // page is 0-based

  const [activeTab, setActiveTab] = React.useState<UserTab>(tabsData.tabs?.[0]);
  const [columns, setColumns] = React.useState(() => activeTab?.columns ?? []);

  const handleTabChange = (tab: UserTab) => {
    setActiveTab(tab);
    setColumns(tab.columns);
    router.navigate({
      to: router.state.location.pathname,
      search: (prev) => ({ ...prev, page: 1 }),
      replace: true,
    });
  };

  const toggleColumnVisibility = useCallback((fieldKey: string) => {
    setColumns((prev) =>
      prev.map((col) => (col.field_key === fieldKey ? { ...col, visible: !col.visible } : col)),
    );
  }, []);

  const queryParams = {
    tab_id: activeTab?.id ?? 0,
    model,
    filters: activeTab?.filters ?? {},
    search_term: activeTab?.search_term ?? '',
    columns: [...columns],
    page, // already 0-based
  };
  const { data, isLoading, isFetching } = usePaginatedModelIndex(queryParams);

  const flatData = data?.data ?? [];
  const totalCount = data?.meta?.totalRowCount ?? 0;
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const goToPage = (newPage: number) => {
    console.log(newPage);
    router.navigate({
      to: router.state.location.pathname,
      search: (prev) => ({ ...prev, page: newPage + 1 }), // write 1-based to URL
      replace: true,
    });
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TabsBar tabs={tabsData.tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      <Toolbar key={activeTab?.id} columns={columns} onToggleColumn={toggleColumnVisibility} />

      <div id='data-container-scroll' style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
        <Table
          key={`${page}-${columns.map((c) => `${c.field_key}-${c.visible}`).join('_')}`}
          data={flatData}
          isLoading={isLoading}
          formFields={tabsData.form_fields}
          activeTabColumns={columns}
          totalCount={totalCount}
        />

        {isFetching && !isLoading && (
          <div style={{ textAlign: 'center', padding: '4px', fontSize: '12px', color: '#666' }}>
            Loading page {page + 1}...
          </div>
        )}
      </div>

      {/* pagenation */}
      <div style={{ padding: '8px', display: 'flex', justifyContent: 'center', gap: '12px' }}>
        <button onClick={() => goToPage(Math.max(0, page - 1))} disabled={page === 0}>
          Previous
        </button>
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <button
          onClick={() => goToPage(Math.min(totalPages - 1, page + 1))}
          disabled={page >= totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataContainer;
