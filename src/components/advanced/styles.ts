// styles.ts
import styled from 'styled-components';

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasChildren',
})<{ hasChildren: boolean }>`
  width: ${({ hasChildren }) => (hasChildren ? '70vw' : '600px')};
  position: relative;
`;
export const GroupContainer = styled.div<{ level: number }>`
  display: flex;
  gap: 0.5rem;
  align-items: start;
  border-radius: 0.5rem;
  margin-left: ${({ level }) => (level === 1 ? '-0.5rem' : '0')};
  background-color: ${({ level }) =>
    level === 0 ? '#ffffff' : level === 1 ? '#F5F5F4' : '#E7E5E4'};
`;

export const GroupInner = styled.div<{ level: number }>`
  flex: 1;
  border-radius: 0.5rem;
  margin: ${({ level }) => (level > 0 ? '0.5rem' : '0')};
  padding: ${({ level }) => (level > 0 ? '0.375rem' : '0')};
  background-color: ${({ level }) =>
    level === 0 ? '#ffffff' : level === 1 ? '#F5F5F4' : '#E7E5E4'};
`;

export const GroupHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Chip = styled.div<{ level: number }>`
  padding-top: ${({ level }) => (level > 1 ? '1.5rem' : '21px')};
  width: 5rem;
  font-size: 0.875rem;
  transform: translateX(0.75rem);
`;

export const ItemRow = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0 0.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;

export const AddMenuWrapper = styled.div`
  position: absolute;
  right: 2.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000000000000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
`;
