import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { debounce } from 'lodash';
import TabsBar from 'components/UI/TabsBar';
import Toolbar from 'components/UI/Toolbar';
import Table from 'components/UI/Table';
import { nanoid } from 'nanoid';
import { usePaginatedModelIndex, PAGE_SIZE } from 'core/services/data.service';

import type { UserTab } from 'types/tabs';
import type { DataContainerProps } from './DataContainer.types';
import { OnChangeFn } from '@tanstack/react-table';

const DataContainer: React.FC<DataContainerProps> = ({ model, tabsData, filters, setFilters }) => {
  const [activeTab, setActiveTab] = useState<UserTab>(tabsData.tabs?.[0]);
  const [columns, setColumns] = useState(() => activeTab?.columns ?? []);
  const [filtersState, setFiltersState] = useState(
    Object.keys(activeTab?.filters ?? {}).length === 0
      ? { id: nanoid(), type: 'GROUP', conjunction: 'and', children: [] }
      : activeTab?.filters,
  );

  const pageIndex = filters.pageIndex ?? 0;
  const pageSize = filters.pageSize ?? PAGE_SIZE;
  const search = filters.search ?? '';

  // Create debounced functions using lodash
  const debouncedSearch = useMemo(
    () =>
      debounce((searchTerm: string) => {
        setFilters({ search: searchTerm, pageIndex: 0 });
      }, 300),
    [setFilters],
  );

  const debouncedSetFiltersState = useMemo(
    () =>
      debounce((newFilters: any) => {
        setFiltersState(newFilters);
      }, 300),
    [],
  );

  // Cleanup debounced functions on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
      debouncedSetFiltersState.cancel();
    };
  }, [debouncedSearch, debouncedSetFiltersState]);

  const handleTabChange = useCallback(
    (tab: UserTab) => {
      // Cancel any pending debounced calls when switching tabs
      debouncedSearch.cancel();
      debouncedSetFiltersState.cancel();

      setActiveTab(tab);
      setColumns(tab.columns);
      setFilters({ pageIndex: 0 });

      // Reset filters immediately when changing tabs
      const newFilters =
        Object.keys(tab?.filters ?? {}).length === 0
          ? { id: nanoid(), type: 'GROUP', conjunction: 'and', children: [] }
          : tab?.filters;
      setFiltersState(newFilters);
    },
    [setFilters, debouncedSearch, debouncedSetFiltersState],
  );

  const handleSearch = useCallback(
    (searchTerm: string) => {
      debouncedSearch(searchTerm);
    },
    [debouncedSearch],
  );

  const handleAdvancedFiltersChange = useCallback(
    (newFilters: any) => {
      debouncedSetFiltersState(newFilters);
    },
    [debouncedSetFiltersState],
  );

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
  }> = useCallback(
    (updaterOrValue) => {
      const next =
        typeof updaterOrValue === 'function' ? updaterOrValue(pagination) : updaterOrValue;
      setFilters({
        pageIndex: next.pageIndex,
        pageSize: next.pageSize,
      });
    },
    [pagination, setFilters],
  );

  // ✅ Ensure memoized filters and columns to prevent unnecessary/stale re-renders
  const memoizedFiltersState = useMemo(() => filtersState, [filtersState]);
  const memoizedColumns = useMemo(() => columns, [columns]);

  const queryParams = useMemo(
    () => ({
      tab_id: activeTab?.id ?? 0,
      model,
      filters: memoizedFiltersState,
      search_term: activeTab?.search_term ?? '',
      columns: memoizedColumns,
      page: pageIndex,
      search,
    }),
    [
      activeTab?.id,
      activeTab?.search_term,
      model,
      memoizedFiltersState,
      memoizedColumns,
      pageIndex,
      search,
    ],
  );

  const { data, isLoading, isFetching } = usePaginatedModelIndex(queryParams);
  const totalCount = data?.meta?.totalRowCount ?? 0;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TabsBar tabs={tabsData.tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      <Toolbar
        formFields={tabsData.form_fields}
        columns={columns}
        searchValue={search} // Use the actual search value from filters
        onToggleColumn={toggleColumnVisibility}
        onSearch={handleSearch} // ✅ Debounced search handler
        filters={filtersState}
        setFilters={handleAdvancedFiltersChange} // ✅ Debounced advanced filters handler
      />

      <div id='data-container-scroll' style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
        <Table
          data={data?.data}
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
