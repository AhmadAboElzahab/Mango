import React, { useCallback, useMemo, useState } from 'react';
import TabsBar from 'components/UI/TabsBar';
import Toolbar from 'components/UI/Toolbar';
import Table from 'components/UI/Table';
import { usePaginatedModelIndex, PAGE_SIZE } from 'core/services/data.service';

import type { UserTab } from 'types/tabs';
import type { DataContainerProps } from './DataContainer.types';
import { OnChangeFn } from '@tanstack/react-table';

const DataContainer: React.FC<DataContainerProps> = ({ model, tabsData, filters, setFilters }) => {
  const [activeTab, setActiveTab] = useState<UserTab>(tabsData.tabs?.[0]);
  const [columns, setColumns] = useState(() => activeTab?.columns ?? []);

  const pageIndex = filters.pageIndex ?? 0;
  const pageSize = filters.pageSize ?? PAGE_SIZE;
  const search = filters.search ?? '';

  const handleTabChange = (tab: UserTab) => {
    setActiveTab(tab);
    setColumns(tab.columns);
    setFilters({ pageIndex: 0 });
  };

  const handleSearch = (searchTerm: string) => {
    setFilters({ search: searchTerm, pageIndex: 0 });
  };

  const toggleColumnVisibility = useCallback((fieldKey: string) => {
    setColumns((prev) =>
      prev.map((col) => (col.field_key === fieldKey ? { ...col, visible: !col.visible } : col)),
    );
  }, []);

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );

  const updatePagination: OnChangeFn<{
    pageIndex: number;
    pageSize: number;
  }> = (updaterOrValue) => {
    const next =
      typeof updaterOrValue === 'function'
        ? (
            updaterOrValue as (prev: { pageIndex: number; pageSize: number }) => {
              pageIndex: number;
              pageSize: number;
            }
          )(pagination)
        : updaterOrValue;
    setFilters({
      pageIndex: next.pageIndex,
      pageSize: next.pageSize,
    });
  };

  const queryParams = {
    tab_id: activeTab?.id ?? 0,
    model,
    filters: activeTab?.filters ?? {},
    search_term: activeTab?.search_term ?? '',
    columns: [...columns],
    page: pageIndex,
    search,
  };

  const { data, isLoading, isFetching } = usePaginatedModelIndex(queryParams);
  const flatData = data?.data ?? [];
  const totalCount = data?.meta?.totalRowCount ?? 0;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TabsBar tabs={tabsData.tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      <Toolbar
        key={activeTab?.id}
        columns={columns}
        onToggleColumn={toggleColumnVisibility}
        onSearch={handleSearch}
      />

      <div id='data-container-scroll' style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
        <Table
          key={`${pageIndex}-${columns.map((c) => `${c.field_key}-${c.visible}`).join('_')}`}
          data={flatData}
          isLoading={isLoading}
          formFields={tabsData.form_fields}
          activeTabColumns={columns}
          totalCount={totalCount}
          pagination={pagination}
          setPagination={updatePagination}
        />

        {isFetching && !isLoading && (
          <div style={{ textAlign: 'center', padding: '4px', fontSize: '12px', color: '#666' }}>
            Loading page {pageIndex + 1}...
          </div>
        )}
      </div>
    </div>
  );
};

export default DataContainer;
