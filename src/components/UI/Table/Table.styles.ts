import styled from 'styled-components';
import { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

export const SkeletonCell = styled.div`
  height: 20%;
  width: 90%;
  margin-inline: auto;
  background-color: #e2e2e2;
  border-radius: 4px;
  animation: ${shimmer} 1.2s infinite linear;
  background: linear-gradient(90deg, #e2e2e2 0px, #f5f5f5 40px, #e2e2e2 80px);
  background-size: 200px 100%;
  opacity: 0.4;
`;
export const SkeletonHeader = styled.div`
  height: 20%;
  width: 90%;
  margin-inline: auto;
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: ${shimmer} 1.2s infinite linear;
  background: linear-gradient(90deg, #e0e0e0 0px, #f5f5f5 40px, #e0e0e0 80px);
  background-size: 200px 100%;
  opacity: 0.4;
`;

export const StyledTableWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: #fff;
  overflow: visible;
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
  min-width: 36px;
  max-width: 36px;
  padding: 0;
`;
export const FadeTbody = styled.tbody<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.4s ease;
  position: ${({ $visible }) => ($visible ? 'relative' : 'absolute')};
  width: 100%;
`;

export const StyledTh = styled.th`
  text-align: left;
  color: rgb(29, 31, 37);
  background-color: #f4f4f4;
  color: rgb(29, 31, 37);
  border-bottom: 1px solid hsl(0, 0%, 82%);
  border-left: 1px solid hsl(202, 10%, 88%);
  padding-top: 1px;
  padding-left: 10px;
  font-weight: 400;
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
    width: 36px;
    max-width: 36px;
    padding: 0 !important;
  }

  &:nth-child(2) {
    border-left: none;
  }

  input:not([type='checkbox']),
  select {
    font-weight: 400;
    font-size: 13px;
    padding-left: 10px;
    color: rgb(29, 31, 37);
    width: 100%;
    height: 100%;
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
