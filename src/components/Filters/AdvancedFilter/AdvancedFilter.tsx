import { Icon } from 'components/UI/Icon/Icon';
import { Popup } from 'components/UI/Popup';
import { useAdvancedFilter } from 'hooks/useAdvancedFilters';
import React, { useMemo, useState } from 'react';

import { FilterItemProps } from '../FilterItem/FilterItem.types';
import SortableGroup from './components/SortableGroup';

const AdvancedFilter: React.FC<FilterItemProps> = ({ dataState, value, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    ruleset,
    updateGroupOrder,
    addItem,
    addGroup,
    handleDelete,
    handleUpdateConjunction,
    updateItem,
  } = useAdvancedFilter(value, handleChange);

  const togglePopup = () => setIsOpen((prev) => !prev);
  const closePopup = () => setIsOpen(false);

  const hasChildren = useMemo(() => ruleset?.children?.length > 0, [ruleset?.children?.length]);
  const isActive = isOpen || hasChildren;

  return (
    <div
      className={`relative flex flex-row cursor-pointer rounded-[3px] px-2 py-1 h-fit transition-[background-color] duration-85 ease-in ${
        isActive
          ? 'bg-[#FEEAB6] hover:bg-transparent hover:shadow-[inset_0_0_0_2px_rgba(0,0,0,0.1)]'
          : 'hover:bg-black/5'
      }`}
      onClick={togglePopup}
    >
      <Icon name='FunnelSimple' width={16} height={16} />
      <span className="ml-1 text-[13px] text-[#1d1f24] font-normal">Filter</span>
      <Popup isOpen={isOpen} onClose={closePopup}>
        <div
          className={`relative ${hasChildren ? 'w-[70vw]' : 'w-fit'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <SortableGroup
            group={ruleset}
            level={0}
            index={0}
            dataState={dataState}
            updateGroupOrder={updateGroupOrder}
            addItem={addItem}
            addGroup={addGroup}
            handleDelete={handleDelete}
            handleUpdateConjunction={handleUpdateConjunction}
            updateItem={updateItem}
          />
        </div>
      </Popup>
    </div>
  );
};

export default AdvancedFilter;
