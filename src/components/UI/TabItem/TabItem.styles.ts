import styled from 'styled-components';

export const StyledTabItem = styled.div<{ $active?: boolean }>`
  box-shadow: ${({ $active }) =>
    $active ? 'rgb(240 43 43 / 0%) 0px 0px 2px, rgba(0, 0, 0, 0.16) 0px -1px 3px' : 'none'};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  cursor: pointer;
  background-color: ${({ $active }) => ($active ? 'white' : 'transparent')};

  height: 32px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  padding: 0px 12px 0px 12px;
  justify-content: center;
  margin-right: 12px;
  &::before,
  &::after {
    content: ${({ $active }) => ($active ? `''` : 'none')};
    position: absolute;
    bottom: 0;
    width: 3px;
    height: 3px;
  }

  &::before {
    right: -3px;
    background-image: ${({ $active }) =>
      $active
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3' height='3' viewBox='0 0 3 3'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0C0 1.65686 1.34326 3 3 3H0V0Z' fill='white'%3E%3C/path%3E%3C/svg%3E")`
        : 'none'};
  }

  &::after {
    left: -3px;
    background-image: ${({ $active }) =>
      $active
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3' height='3' viewBox='0 0 3 3'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3 0C3 1.65686 1.65674 3 0 3H3V0Z' fill='white'%3E%3C/path%3E%3C/svg%3E")`
        : 'none'};
  }
`;

export const StyledSpan = styled.span<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? 'rgba(0,0,0,1)' : 'rgba(255, 255, 255, 0.85)')};
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 500 : 400)};
  text-transform: capitalize;
`;
