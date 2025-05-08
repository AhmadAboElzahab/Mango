import Table from 'components/UI/Table';
import TabsBar from 'components/UI/TabsBar';
import Toolbar from 'components/UI/Toolbar';
import { useModelIndex } from 'core/services/data.service';
import React, { useCallback, useMemo, useState } from 'react';
import { UserTab } from 'types/tabs';

import type { DataContainerProps } from './DataContainer.types';

const DataContainer: React.FC<DataContainerProps> = ({ model, tabsData }) => {
  const [activeTab, setActiveTab] = useState<UserTab>(tabsData.tabs?.[0]);

  const [columns, setColumns] = useState(() => activeTab?.columns ?? []);

  const handleTabChange = (tab: UserTab) => {
    setActiveTab(tab);
    setColumns(tab.columns);
  };

  const toggleColumnVisibility = useCallback((fieldKey: string) => {
    setColumns((prev) =>
      prev.map((col) => (col.field_key === fieldKey ? { ...col, visible: !col.visible } : col)),
    );
  }, []);

  const { data, isLoading } = useModelIndex({
    tab_id: activeTab?.id,
    model,
    filters: activeTab?.filters ?? {},
    search_term: activeTab?.search_term ?? '',
    columns,
  });

  const content = useMemo(() => {
    if (isLoading) return <div>Loading data...</div>;

    return (
      <>
        <div style={{ backgroundColor: '#FBFBFB', flex: 1 }}>
          <Table
            data={data?.data ?? []}
            formFields={tabsData.form_fields}
            activeTabColumns={columns}
          />
        </div>
      </>
    );
  }, [isLoading, columns, data, tabsData.form_fields]);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TabsBar tabs={tabsData.tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      <Toolbar key={activeTab?.id} columns={columns} onToggleColumn={toggleColumnVisibility} />

      {content}
    </div>
  );
};

export default DataContainer;
