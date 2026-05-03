import React, { useCallback, useEffect, useState } from 'react';

import { Icon } from '../Icon/Icon.tsx';
import { SearchProps } from './Search.types';

const Search: React.FC<SearchProps> = ({ onSearch, searchValue = '' }) => {
  const [localValue, setLocalValue] = useState(searchValue);

  useEffect(() => {
    setLocalValue(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (localValue !== searchValue) {
        onSearch(localValue);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [localValue, onSearch, searchValue]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  }, []);

  return (
    <div>
      <Icon name='MagnifyingGlass' width={16} height={16} fill='#1d1f24' />
      <span className="ml-2 text-[13px] text-[#1d1f24] font-normal">Search</span>
      <input
        value={localValue}
        type='text'
        placeholder='Search...'
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginLeft: '8px',
        }}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
