import React from 'react';

import { HeaderWrapper, StyledLink } from './Header.styles';
import { HeaderProps } from './Header.types';
import Button from 'components/Input/Button';

const Header: React.FC<HeaderProps> = ({ Links, onLogout }) => (
  <HeaderWrapper>
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
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
    </div>
    <Button variant='danger' onClick={onLogout}>
      log out
    </Button>
  </HeaderWrapper>
);

export default Header;
