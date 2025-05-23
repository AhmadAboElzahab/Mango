import React from 'react';
import './Search.styles.ts';
import { SearchProps } from './Search.types';
import { Icon } from 'components/icons/Icon.tsx';
import { StyledLabel } from './Search.styles.ts';

const Search: React.FC<SearchProps> = ({
  onSearch,
  // Add any other props you need
}) => {
  return (
    <div>
      <Icon name='Filter' width={16} height={16} fill='#1d1f24' />
      <StyledLabel>Search</StyledLabel>
      <input
        type='text'
        placeholder='Search...'
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginLeft: '8px',
        }}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
    </div>
  );
};
export default Search;
