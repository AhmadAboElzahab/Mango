import React, { useState } from 'react';
import type { DataContainerProps } from './DataContainer.types';
import { useModelIndex } from 'core/services/data.service';
import TabsBar from 'components/UI/TabsBar';
import Toolbar from 'components/UI/Toolbar';
import Table from 'components/UI/Table';

const DataContainer: React.FC<DataContainerProps> = ({ model, tabsData }) => {
  const [activeTab, setActiveTab] = useState(tabsData.tabs?.[0]);

  const { data, isLoading } = useModelIndex({
    tab_id: activeTab?.id,
    model,
    filters: activeTab?.filters ?? {},
    search_term: activeTab?.search_term ?? '',
    columns: activeTab?.columns ?? [],
  });
  return (
    <div
      style={{
        height: '100%', // optional, as parent has already defined it
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TabsBar tabs={tabsData.tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <Toolbar />
      <div
        style={{
          backgroundColor: '#FBFBFB',
          flex: 1, // fills the remaining space
        }}
      >
        {isLoading ? (
          <div>Loading data...</div>
        ) : (
          <Table data={data.data} formFields={tabsData.form_fields} />
        )}
      </div>
    </div>
  );
};

export default DataContainer;
