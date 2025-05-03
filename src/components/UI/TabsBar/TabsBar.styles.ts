import styled from 'styled-components';
export const StyledTabsBar = styled.div`
  clip-path: inset(-3px 0px 0px);
  background-color: rgba(0, 0, 0, 0.1);
  transition: width 300ms ease-in-out;
  display: flex;
  flex-direction: row;
  height: 32px;
  border-top-right-radius: 6px;
  position: relative;
  padding-left: 0.75rem;
  &:before {
    content: ''; /* This is required for the pseudo-element to appear */
    display: block;
    position: absolute;
    height: 3px;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.16));
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`;
