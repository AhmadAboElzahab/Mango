import React, { useState } from 'react';
import type { DataContainerProps } from './DataContainer.types';
import { useModelIndex } from 'core/services/data.service';
import TabsBar from 'components/UI/TabsBar';

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
    <div>
      <TabsBar tabs={tabsData.tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {isLoading ? <div>Loading data...</div> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default DataContainer;
