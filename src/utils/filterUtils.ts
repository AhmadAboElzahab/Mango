import { Group } from 'components/Filters/AdvancedFilter/AdvancedFilter.types';
import { Item } from 'components/Filters/FilterItem/FilterItem.types';
import { BACKGROUND_COLORS } from 'constants/advancedFilter';
import { nanoid } from 'nanoid';

export const generateId = () => nanoid();

export const findNodeById = (node: Group | Item, targetId: string): Group | Item | null => {
  if (node.id === targetId) return node;

  if (node.type === 'GROUP') {
    for (const child of node.children) {
      const found = findNodeById(child, targetId);
      if (found) return found;
    }
  }

  return null;
};

export const getBackgroundColor = (level: number): string => {
  return BACKGROUND_COLORS[level as keyof typeof BACKGROUND_COLORS] || '#ffffff';
};

export const createNewItem = (): Item => ({
  id: generateId(),
  type: 'ITEM',
  columnId: '',
  fieldId: '',
  label: '',
  columnType: '',
  operator: null,
  value: '',
});

export const createNewGroup = (): Group => ({
  id: generateId(),
  type: 'GROUP',
  children: [],
  conjunction: 'and',
});

export const removeItemById = (items: (Group | Item)[], id: string): (Group | Item)[] => {
  return items
    .filter((item) => item.id !== id)
    .map((item) => ({
      ...item,
      children: item.type === 'GROUP' ? removeItemById(item.children, id) : [],
    }));
};

export const updateConjunctionById = (
  group: Group,
  id: string,
  newConjunction: 'and' | 'or',
): Group => {
  if (group.id === id) {
    return { ...group, conjunction: newConjunction };
  }

  return {
    ...group,
    children: group.children.map((child) =>
      child.type === 'GROUP' ? updateConjunctionById(child, id, newConjunction) : child,
    ),
  };
};
