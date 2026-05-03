import type React from 'react';

import type { TabItemProps } from './TabItem.types.ts';

const TabItem: React.FC<TabItemProps> = ({ active = false, title = '', onClick }) => {
  return (
    <div className={`tab-item${active ? ' tab-item--active' : ''}`} onClick={onClick}>
      <span
        className={`flex items-center text-[13px] capitalize ${
          active ? 'text-black font-medium' : 'text-white/85 font-normal'
        }`}
      >
        {title}
      </span>
      {active && (
        <span className='flex items-center text-[13px] text-black font-medium capitalize'>↓</span>
      )}
    </div>
  );
};

export default TabItem;
