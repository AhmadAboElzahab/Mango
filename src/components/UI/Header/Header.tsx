// src/components/Header/Header.tsx
import React from 'react';
import { HeaderWrapper, StyledLink } from './Header.styles';

interface HeaderProps {
  Links: Array<{
    to: string;
    label: string;
  }>;
}

const Header: React.FC<HeaderProps> = ({ Links }) => (
  <HeaderWrapper>
    <p
      style={{
        minWidth: '60px',
        color: 'white',
        fontFamily: 'sans-serif',
      }}
    >
      logo
    </p>
    {Links.map((link: { to: string; label: string }, index: number) => (
      <StyledLink key={index} to={link.to}>
        {link.label}
      </StyledLink>
    ))}
  </HeaderWrapper>
);

export default Header;
