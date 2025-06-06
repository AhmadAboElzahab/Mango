import React, { useState, useCallback } from 'react';
import { MoveEvent, ReactSortable } from 'react-sortablejs';
import Select from 'react-select';
import ClickAwayListener from 'react-click-away-listener';

import AddMenu from './AddMenu';
import FilterItem from 'components/Filters/FilterItem';
import { Group, Item } from '../AdvancedFilter.types';
import { getBackgroundColor } from 'utils/filterUtils';
import { CONJUNCTION_OPTIONS, MAX_NESTING_LEVEL } from 'constants/advancedFilter';

export interface SortableGroupProps {
  group: Group;
  level: number;
  index: number;
  dataState: any;
  updateGroupOrder: (id: string, children: (Item | Group)[]) => void;
  addItem: (groupId: string) => void;
  addGroup: (groupId: string, level: number) => void;
  handleDelete: (id: string) => void;
  handleUpdateConjunction: (id: string, newConjunction: 'and' | 'or') => void;
  updateItem: (itemId: string, updatedItem: Item) => void;
}

const SortableGroup: React.FC<SortableGroupProps> = ({
  group,
  level,
  index,
  dataState,
  updateGroupOrder,
  addItem,
  addGroup,
  handleDelete,
  handleUpdateConjunction,
  updateItem,
}) => {
  const { children, id, conjunction } = group;
  const [addMenu, setAddMenu] = useState(false);

  const handleMove = useCallback((event: MoveEvent) => {
    if (event.dragged.children[0]?.getAttribute('data-type') !== 'GROUP') return true;

    const destinationLevel = parseInt(
      event.to.closest('.condition-group')?.getAttribute('data-level') || '0',
      10,
    );

    return destinationLevel < MAX_NESTING_LEVEL;
  }, []);

  const closeAddMenu = useCallback(() => setAddMenu(false), []);
  const toggleAddMenu = useCallback(() => setAddMenu((prev) => !prev), []);

  const handleAddItem = useCallback(() => {
    addItem(id);
    closeAddMenu();
  }, [addItem, id, closeAddMenu]);

  const handleAddGroup = useCallback(() => {
    addGroup(id, level);
    closeAddMenu();
  }, [addGroup, id, level, closeAddMenu]);

  const handleConjunctionChange = useCallback(
    (option: any) => {
      handleUpdateConjunction(id, option?.value);
    },
    [handleUpdateConjunction, id],
  );

  const handleItemUpdate = useCallback(
    (itemId: string) => (updatedItem: Item) => {
      updateItem(itemId, updatedItem);
    },
    [updateItem],
  );

  const isRootLevel = level === 0;
  const hasNoChildren = !children?.length;
  const canAddGroup = level < MAX_NESTING_LEVEL;

  const renderEmptyState = () => {
    if (isRootLevel && hasNoChildren) {
      return <div>No conditions are applied</div>;
    }

    if (hasNoChildren) {
      return <p>Drag conditions here or add new ones</p>;
    }

    return (
      <p>
        {conjunction === 'or' ? 'Any of the following are true…' : 'All of the following are true…'}
      </p>
    );
  };

  const renderGroupActions = () => {
    if (isRootLevel) return null;

    return (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => handleDelete(id)}>🗑️</button>
        <ClickAwayListener onClickAway={closeAddMenu}>
          <div>
            <button onClick={toggleAddMenu} style={{ marginTop: '0.5rem' }}>
              ➕
            </button>
            {addMenu && (
              <AddMenu
                onAddItem={handleAddItem}
                onAddGroup={handleAddGroup}
                canAddGroup={canAddGroup}
              />
            )}
          </div>
        </ClickAwayListener>
        <button className='drag-handle' style={{ cursor: 'grab' }}>
          ⋮⋮
        </button>
      </div>
    );
  };

  const renderRootActions = () => {
    if (!isRootLevel) return null;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          padding: '0.5rem',
          marginTop: '0.5rem',
          width: 'fit-content',
        }}
      >
        <button onClick={() => addItem(id)}>➕ Add condition</button>
        <button onClick={() => addGroup(id, level)}>➕ Add condition group</button>
      </div>
    );
  };

  const renderChild = (child: Item | Group, childIndex: number) => {
    const isFirstChild = childIndex === 0;
    const isSecondChild = childIndex === 1;

    const prefix = (
      <div
        style={{
          padding: '0.5rem',
          paddingTop: level > 1 ? '1.5rem' : '21px',
          width: '5rem',
          transform: 'translateX(0.75rem)',
          fontSize: '0.875rem',
        }}
      >
        {isFirstChild ? 'Where' : conjunction}
      </div>
    );

    const conjunctionSelect = (
      <Select
        className='operator-select'
        value={{ label: conjunction, value: conjunction }}
        options={CONJUNCTION_OPTIONS}
        onChange={handleConjunctionChange}
        isClearable={false}
      />
    );

    if (child.type === 'GROUP') {
      return (
        <div key={child.id} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
          {isSecondChild ? conjunctionSelect : prefix}
          <SortableGroup
            group={child}
            level={level + 1}
            index={childIndex}
            dataState={dataState}
            addGroup={addGroup}
            addItem={addItem}
            updateGroupOrder={updateGroupOrder}
            handleDelete={handleDelete}
            handleUpdateConjunction={handleUpdateConjunction}
            updateItem={updateItem}
          />
        </div>
      );
    }

    return (
      <div
        key={child.id}
        style={{
          display: 'flex',
          gap: '0.25rem',
          alignItems: 'center',
          padding: '0 0.5rem',
        }}
      >
        {isSecondChild ? conjunctionSelect : prefix}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between' }} data-type='ITEM'>
          <div style={{ padding: '0.375rem 0.5rem', width: '100%' }}>
            <FilterItem data={dataState} item={child} onItemChange={handleItemUpdate(child.id)} />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={() => handleDelete(child.id)}>🗑️</button>
            <button className='drag-handle' style={{ cursor: 'grab' }}>
              ⋮⋮
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className='condition-group'
      style={{
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'flex-start',
        borderRadius: '0.5rem',
        marginLeft: index === 1 ? '-0.5rem' : '0',
        backgroundColor: getBackgroundColor(level - 1),
        flex: 1,
      }}
      data-level={level}
      data-type='GROUP'
    >
      <div
        style={{
          borderRadius: '0.5rem',
          margin: level > 1 ? '0.5rem' : '0',
          paddingTop: level > 0 ? '0.375rem' : '0',
          paddingBottom: level > 0 ? '0.375rem' : '0',
          backgroundColor: getBackgroundColor(level),
          flex: 1,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
              {renderEmptyState()}
            </div>
            {renderGroupActions()}
          </div>
        </div>

        <ReactSortable
          list={children ?? []}
          setList={(newChildren) => updateGroupOrder(id, newChildren)}
          group='nested'
          animation={150}
          fallbackOnBody
          swapThreshold={0.65}
          handle='.drag-handle'
          onMove={handleMove}
          ghostClass='sortable-ghost'
        >
          {children?.map(renderChild)}
        </ReactSortable>

        {renderRootActions()}
      </div>
    </div>
  );
};

export default SortableGroup;
