import styled from 'styled-components';
export const StyledTabItem = styled.div`
  box-shadow:
    rgb(240 43 43 / 0%) 0px 0px 2px,
    rgba(0, 0, 0, 0.16) 0px -1px 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: white;
  width: 80px;
  height: 32px;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  padding: 0px 12px 0px 6px;

  justify-content: center;
  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 3px;
    height: 3px;
  }

  &::before {
    right: -3px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3' height='3' viewBox='0 0 3 3'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0C0 1.65686 1.34326 3 3 3H0V0Z' fill='white'%3E%3C/path%3E%3C/svg%3E");
  }

  &::after {
    left: -3px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3' height='3' viewBox='0 0 3 3'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3 0C3 1.65686 1.65674 3 0 3H3V0Z' fill='white'%3E%3C/path%3E%3C/svg%3E");
  }
`;
export const StyledSpan = styled.span`
  color: black;
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
`;
