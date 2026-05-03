import { Link } from '@tanstack/react-router';
import Button from 'components/Input/Button';
import React from 'react';

import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = ({ Links, onLogout }) => (
  <div className="flex items-center justify-between flex-row gap-2 h-14 pr-4 pl-5">
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
        <Link key={index} to={link.to} className="nav-link">
          {link.label}
        </Link>
      ))}
    </div>
    <Button variant='danger' onClick={onLogout}>
      log out
    </Button>
  </div>
);

export default Header;
