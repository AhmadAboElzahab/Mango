import React, { useState } from 'react';
import type { DataContainerProps } from './DataContainer.types';
import { useModelIndex } from 'core/services/data.service';
import TabsBar from 'components/UI/TabsBar';
import Toolbar from 'components/UI/Toolbar';
import Table from 'components/UI/Table';
import { UserTab } from 'types/tabs';

const DataContainer: React.FC<DataContainerProps> = ({ model, tabsData }) => {
  const [activeTab, setActiveTab] = useState(tabsData.tabs?.[0]);
  const [columns, setColumns] = useState(() => activeTab?.columns ?? []);

  const { data, isLoading } = useModelIndex({
    tab_id: activeTab?.id,
    model,
    filters: activeTab?.filters ?? {},
    search_term: activeTab?.search_term ?? '',
    columns: columns ?? [],
  });

  const handleTabChange = (tab: UserTab) => {
    setActiveTab(tab);
    setColumns(tab.columns);
  };
  return (
    <div
      style={{
        height: '100%', // optional, as parent has already defined it
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TabsBar tabs={tabsData.tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      {isLoading ? (
        <div>Loading data...</div>
      ) : (
        <>
          <Toolbar
            columns={columns}
            onToggleColumn={(fieldKey) => {
              setColumns((prev) =>
                prev.map((col) =>
                  col.field_key === fieldKey ? { ...col, visible: !col.visible } : col,
                ),
              );
            }}
          />
          <div
            style={{
              backgroundColor: '#FBFBFB',
              flex: 1, // fills the remaining space
            }}
          >
            <Table data={data.data} formFields={tabsData.form_fields} activeTabColumns={columns} />
          </div>
        </>
      )}
    </div>
  );
};

export default DataContainer;
