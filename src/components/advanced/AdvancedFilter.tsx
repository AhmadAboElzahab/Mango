// AdvancedFilter.tsx

import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { MoveEvent, ReactSortable } from 'react-sortablejs';

import Select from 'react-select';
import ClickAwayListener from 'react-click-away-listener';
import { Container } from './styles';
import { Popup } from 'components/UI/Popup';
import { Icon } from 'components/icons/Icon';
import { StyledLabel } from 'components/Forms/Login/Login.styles';
import FilterItem from 'components/Filters/FilterItem';

// Type definitions for Item and Group
interface Item {
  id: string;
  type: 'ITEM';
  columnId: string;
  fieldId: string;
  operator: any;
  secondOperator?: any;
  columnType: string;
  value: string;
  label: string;
}

interface Group {
  id: string;
  type: 'GROUP';
  conjunction: 'and' | 'or';
  children: any;
}

// Helper functions
const getId = () => nanoid();

const dfs = (obj: Group | Item, targetId: string): Group | Item | null => {
  if (obj.id === targetId) {
    return obj;
  }
  if (obj.type === 'GROUP') {
    for (const item of obj.children) {
      const check = dfs(item, targetId);
      if (check) return check;
    }
  }
  return null;
};

interface FilterItemProps {
  dataState: any;
  value: any;
  handleChange: any;
}

// Main App component
const AdvancedFilter: React.FC<FilterItemProps> = ({ dataState, value, handleChange }) => {
  const [ruleset, setRuleset] = useState<Group>(value);
  useEffect(() => {
    handleChange(ruleset);
  }, [ruleset]);
  const updateGroupOrder = (id: string, children: Array<Item | Group>) => {
    setRuleset((prevRuleset) => {
      const updatedRuleset = { ...prevRuleset };
      const groupToUpdate = dfs(updatedRuleset, id) as Group | null;
      if (groupToUpdate && groupToUpdate.type === 'GROUP') {
        groupToUpdate.children = children;
      }
      return updatedRuleset;
    });
  };

  const addItem = (groupId: string) => {
    const newItemId = getId();
    const newItem = {
      id: newItemId,
      type: 'ITEM' as const,
      columnId: '',
      fieldId: '',
      label: '',
      columnType: '',
      operator: null,
      value: '',
    };

    setRuleset((prevRuleset) => {
      const updatedRuleset = { ...prevRuleset };
      const groupToUpdate = dfs(updatedRuleset, groupId) as Group | null;

      if (groupToUpdate && groupToUpdate.type === 'GROUP') {
        // Check if item with this ID already exists to prevent duplicates
        const itemExists = groupToUpdate.children.some((child: any) => child.id === newItemId);

        if (!itemExists) {
          groupToUpdate.children.push(newItem);
        }
      }

      return updatedRuleset;
    });
  };
  const addGroup = (groupId: string, level: number) => {
    if (level > 1) return;

    const newGroupId = getId();
    const newGroup: Group = {
      id: newGroupId,
      type: 'GROUP',
      children: [],
      conjunction: 'and',
    };

    setRuleset((prevRuleset) => {
      const updatedRuleset = { ...prevRuleset };
      const groupToUpdate = dfs(updatedRuleset, groupId) as Group | null;

      if (groupToUpdate && groupToUpdate.type === 'GROUP') {
        const groupExists = groupToUpdate.children.some((child: any) => child.id === newGroupId);

        if (!groupExists) {
          groupToUpdate.children.push(newGroup);
        }
      }

      return updatedRuleset;
    });
  };

  const removeItemById = (items: Array<Group | Item>, id: string): Array<Group | Item> => {
    return items
      .filter((item) => item.id !== id)
      .map((item) => ({
        ...item,
        children: 'children' in item ? removeItemById(item.children, id) : [],
      }));
  };

  const handleDelete = (id: string) => {
    setRuleset((prev) => ({
      ...prev,
      children: removeItemById(prev.children, id),
    }));
  };

  const updateConjunctionById = (group: Group, id: string, newConjunction: 'and' | 'or'): Group => {
    if (group.id === id) {
      return { ...group, conjunction: newConjunction };
    }
    return {
      ...group,
      children: group.children.map((child: any) => {
        if (child.type === 'GROUP') {
          return updateConjunctionById(child, id, newConjunction);
        }
        return child;
      }),
    };
  };

  const handleUpdateConjunction = (id: string, newConjunction: 'and' | 'or') => {
    setRuleset((prevData) => updateConjunctionById(prevData, id, newConjunction));
  };

  const updateItem = (itemId: string, updatedItem: Item) => {
    try {
      setRuleset((prevRuleset) => {
        const updateItemRecursive = (group: Group): Group => {
          return {
            ...group,
            children: group.children.map((child: Item | Group) => {
              if (child.type === 'ITEM' && child.id === itemId) {
                return { ...child, ...updatedItem };
              } else if (child.type === 'GROUP') {
                return updateItemRecursive(child);
              }
              return child;
            }),
          };
        };
        return updateItemRecursive(prevRuleset);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen((prev) => !prev);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <div onClick={togglePopup}>
        <Icon name='Filter' width={16} height={16} fill='#1d1f24' />
        <StyledLabel>Advanced</StyledLabel>
      </div>
      <Popup isOpen={isOpen} onClose={closePopup}>
        <Container hasChildren={ruleset?.children?.length > 0}>
          <SortableGroup
            group={ruleset}
            updateGroupOrder={updateGroupOrder}
            addItem={addItem}
            addGroup={addGroup}
            index={0}
            dataState={dataState}
            handleDelete={handleDelete}
            handleUpdateConjunction={handleUpdateConjunction}
            updateItem={updateItem}
          />
        </Container>
      </Popup>
    </>
  );
};

const getBackgroundColor = (level: number) => {
  switch (level) {
    case 0:
      return '#ffffff';
    case 1:
      return '#F5F5F4';
    case 2:
      return '#E7E5E4';
    default:
      return '#ffffff';
  }
};

// SortableGroup component
const SortableGroup: React.FC<{
  group: Group;
  level?: number;
  updateGroupOrder: (id: string, children: Array<Item | Group>) => void;
  addItem: (groupId: string) => void;
  addGroup: (groupId: string, level: number) => void;
  dataState: any;
  handleDelete: (id: string) => void;
  handleUpdateConjunction: (id: string, newConjunction: 'and' | 'or') => void;
  updateItem: (itemId: string, updatedItem: Item) => void;
  index: number;
}> = ({
  group,
  level = 0,
  updateGroupOrder,
  addItem,
  addGroup,
  dataState,
  index,
  handleDelete,
  handleUpdateConjunction,
  updateItem,
}) => {
  const { children, id, conjunction } = group;
  const [addMenu, setAddMenu] = useState(false);

  const handleMove = (event: MoveEvent) => {
    if (event.dragged.children[0]?.getAttribute('data-type') !== 'GROUP') return true;
    const destinationLevel = parseInt(
      event.to.closest('.condition-group')?.getAttribute('data-level') || '0',
      10,
    );
    return destinationLevel < 2;
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
              {level === 0 && children?.length < 1 && <div>No conditions are applied</div>}
              {level > 0 &&
                (children?.length < 1 ? (
                  <p>Drag conditions here or add new ones</p>
                ) : (
                  <p>
                    {conjunction === 'or'
                      ? 'Any of the following are true…'
                      : 'All of the following are true…'}
                  </p>
                ))}
            </div>
            {level > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => handleDelete(id)}>trash</button>
                <ClickAwayListener onClickAway={() => setAddMenu(false)}>
                  <div>
                    <button
                      onClick={() => setAddMenu((prev) => !prev)}
                      style={{ marginTop: '0.5rem' }}
                    >
                      add
                    </button>
                    {addMenu && (
                      <div
                        style={{
                          position: 'absolute',
                          right: '2.5rem',
                          background: 'white',
                          borderRadius: '0.5rem',
                          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                          zIndex: 1000000000000,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem',
                          padding: '1rem 0.5rem',
                        }}
                      >
                        <button
                          style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '0.5rem',
                          }}
                          onClick={() => {
                            addItem(id);
                            setAddMenu(false);
                          }}
                        >
                          Add condition
                        </button>
                        <button
                          disabled={level > 1}
                          style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '0.5rem',
                            opacity: level > 1 ? 0.4 : 1,
                            pointerEvents: level > 1 ? 'none' : 'auto',
                          }}
                          onClick={() => {
                            addGroup(id, level);
                            setAddMenu(false);
                          }}
                        >
                          Add condition group
                        </button>
                      </div>
                    )}
                  </div>
                </ClickAwayListener>
                <button className='drag-handle' style={{ cursor: 'grab' }}>
                  drag
                </button>
              </div>
            )}
          </div>
        </div>

        <ReactSortable
          list={children ?? []}
          setList={(newChildren) => updateGroupOrder(id, newChildren as any)}
          group='nested'
          animation={150}
          fallbackOnBody
          swapThreshold={0.65}
          handle='.drag-handle'
          onMove={handleMove}
          ghostClass='sortable-ghost'
        >
          {children?.map((child: any, _index: number) => {
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
                {_index === 0 ? 'Where' : conjunction}
              </div>
            );

            const conjunctionSelect = (
              <Select
                className='operator-select'
                value={{ label: conjunction, value: conjunction }}
                options={[
                  { label: 'or', value: 'or' },
                  { label: 'and', value: 'and' },
                ]}
                onChange={(e: any) => handleUpdateConjunction(id, e?.value)}
                isClearable={false}
              />
            );

            if (child.type === 'GROUP') {
              return (
                <div
                  key={child.id}
                  style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}
                >
                  {_index === 1 ? conjunctionSelect : prefix}
                  <SortableGroup
                    group={child}
                    level={level + 1}
                    index={_index}
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
                {_index === 1 ? conjunctionSelect : prefix}
                <div
                  style={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}
                  data-type='ITEM'
                >
                  <div style={{ padding: '0.375rem 0.5rem', width: '100%' }}>
                    <FilterItem
                      data={dataState}
                      item={child}
                      onItemChange={(updatedItem) => updateItem(child.id, updatedItem)}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => handleDelete(child.id)}>trash</button>
                    <button className='drag-handle' style={{ cursor: 'grab' }}>
                      drag
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </ReactSortable>

        {level === 0 && (
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
            <button onClick={() => addItem(id)}>add Add condition</button>
            <button onClick={() => addGroup(id, level)}>add Add condition group</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedFilter;
