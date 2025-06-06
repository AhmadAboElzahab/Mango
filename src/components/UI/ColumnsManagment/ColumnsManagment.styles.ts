import styled from 'styled-components';
export const StyledColumnsManagmentWrapper = styled.div<{ $active?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  border-radius: 3px;
  padding-inline: 0.5rem;
  padding-block: 0.25rem;
  background-color: ${({ $active }) => ($active ? '#cff5d1' : 'none')};
  height: fit-content;
  transition: 0.085s background-color ease-in;
  &:hover {
    background-color: ${({ $active }) => ($active ? 'none' : 'rgba(0, 0, 0, 0.05)')};
    box-shadow: ${({ $active }) => ($active ? 'inset 0 0 0 2px rgba(0,0,0,0.1)' : 'none')};
  }
`;

export const StyledLabel = styled.span`
  margin-left: 0.25rem;
  font-size: 13px;
  color: #1d1f24;
  font-weight: 400;
`;
