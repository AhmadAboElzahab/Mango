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
    <div className='relative'>
      <Icon
        name='MagnifyingGlass'
        className='absolute top-1/2 -translate-y-1/2 left-2'
        width={16}
        height={16}
        fill='#1d1f24'
      />
      <input
        value={localValue}
        type='text'
        placeholder='Search...'
        className='pl-8 focus:ring-0 focus:outline-none border border-[#c2c5c8] rounded focus:border-[#1d1f24]'
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
