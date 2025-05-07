import styled from 'styled-components';

export const StyledTableWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: #fff;
`;

export const StyledTable = styled.table`
  width: 100%;
  font-size: 13px;
  border-spacing: 0;
`;
export const StyledIndexCell = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;

  input[type='checkbox'] {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  color: ${({ $isSelected }) => ($isSelected ? '#0366d6' : '#888')};
  font-weight: ${({ $isSelected }) => ($isSelected ? '600' : 'normal')};
`;

export const StyledTh = styled.th`
  text-align: left;
  color: #444;
  background-color: #f4f4f4;
  color: rgb(29, 31, 37);
  border-bottom: 1px solid hsl(0, 0%, 82%);
  border-left: 1px solid hsl(202, 10%, 88%);
  padding-top: 1px;
  padding-left: 10px;
  font-weight: 500;
  height: 31px;
  white-space: nowrap;
  &:first-child {
    border-left: none;
    text-align: center;
  }
  &:nth-child(2) {
    border-left: none;
  }
`;
export const StyledTd = styled.td`
  position: relative;
  padding: 0;
  height: 32px;
  border-bottom: 1px solid hsl(202, 10%, 88%);
  border-left: 1px solid hsl(202, 10%, 88%);
  border-right: none;
  border-top: none;
  &:first-child {
    border-left: none;
  }
  &:nth-child(2) {
    border-left: none;
  }
  input:not([type='checkbox']),
  select {
    padding-left: 10px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    border: none;
    background-color: transparent;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
`;

export const StyledBadge = styled.span`
  background: #e0f0ff;
  color: #0366d6;
  font-size: 12px;
  border-radius: 4px;
  padding: 2px 6px;
  display: inline-block;
`;
