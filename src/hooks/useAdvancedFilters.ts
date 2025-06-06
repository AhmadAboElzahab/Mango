import { useState, useEffect, useCallback } from 'react';

import { Group } from 'components/Filters/AdvancedFilter/AdvancedFilter.types';
import { Item } from 'components/Filters/FilterItem/FilterItem.types';
import {
  createNewGroup,
  createNewItem,
  findNodeById,
  removeItemById,
  updateConjunctionById,
} from 'utils/filterUtils';
import { MAX_NESTING_LEVEL } from 'constants/advancedFilter';

export const useAdvancedFilter = (initialValue: Group, onChange: (ruleset: Group) => void) => {
  const [ruleset, setRuleset] = useState<Group>(initialValue);

  useEffect(() => {
    onChange(ruleset);
  }, [ruleset, onChange]);

  const updateGroupOrder = useCallback((id: string, children: (Item | Group)[]) => {
    setRuleset((prevRuleset) => {
      const updatedRuleset = { ...prevRuleset };
      const groupToUpdate = findNodeById(updatedRuleset, id) as Group | null;

      if (groupToUpdate?.type === 'GROUP') {
        groupToUpdate.children = children;
      }

      return updatedRuleset;
    });
  }, []);

  const addItem = useCallback((groupId: string) => {
    const newItem = createNewItem();

    setRuleset((prevRuleset) => {
      const updatedRuleset = { ...prevRuleset };
      const groupToUpdate = findNodeById(updatedRuleset, groupId) as Group | null;

      if (groupToUpdate?.type === 'GROUP') {
        const itemExists = groupToUpdate.children.some((child) => child.id === newItem.id);
        if (!itemExists) {
          groupToUpdate.children.push(newItem);
        }
      }

      return updatedRuleset;
    });
  }, []);

  const addGroup = useCallback((groupId: string, level: number) => {
    if (level >= MAX_NESTING_LEVEL) return;

    const newGroup = createNewGroup();

    setRuleset((prevRuleset) => {
      const updatedRuleset = { ...prevRuleset };
      const groupToUpdate = findNodeById(updatedRuleset, groupId) as Group | null;

      if (groupToUpdate?.type === 'GROUP') {
        const groupExists = groupToUpdate.children.some((child) => child.id === newGroup.id);
        if (!groupExists) {
          groupToUpdate.children.push(newGroup);
        }
      }

      return updatedRuleset;
    });
  }, []);

  const handleDelete = useCallback((id: string) => {
    setRuleset((prev) => ({
      ...prev,
      children: removeItemById(prev.children, id),
    }));
  }, []);

  const handleUpdateConjunction = useCallback((id: string, newConjunction: 'and' | 'or') => {
    setRuleset((prevData) => updateConjunctionById(prevData, id, newConjunction));
  }, []);

  const updateItem = useCallback((itemId: string, updatedItem: Item) => {
    setRuleset((prevRuleset) => {
      const updateItemRecursive = (group: Group): Group => ({
        ...group,
        children: group.children.map((child) => {
          if (child.type === 'ITEM' && child.id === itemId) {
            return { ...child, ...updatedItem };
          }
          if (child.type === 'GROUP') {
            return updateItemRecursive(child);
          }
          return child;
        }),
      });

      return updateItemRecursive(prevRuleset);
    });
  }, []);

  return {
    ruleset,
    updateGroupOrder,
    addItem,
    addGroup,
    handleDelete,
    handleUpdateConjunction,
    updateItem,
  };
};
