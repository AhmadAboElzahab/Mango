import styled from 'styled-components';
import { Link } from '@tanstack/react-router';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 0.5rem;
  height: 56px;
  padding: 0px 16px 0px 20px;
`;

export const StyledLink = styled(Link)`
  font-size: 13px;
  font-weight: 400;
  text-transform: capitalize;
  text-decoration: none;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.85);
  border-radius: 9999px;
  padding-inline: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;

  &.active {
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 0px 2px inset,
      rgba(0, 0, 0, 0.1) 0px 1px 1px inset;
    cursor: default;
    background-color: rgba(0, 0, 0, 0.15);
    mix-blend-mode: normal;
    color: rgba(255, 255, 255, 0.95);
  }
  &:hover {
    color: rgba(255, 255, 255, 0.95);
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
