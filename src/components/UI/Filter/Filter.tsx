import './Filter.styles.ts';

import { Icon } from 'components/icons/Icon.tsx';
import React, { useState } from 'react';

import { Popup } from '../Popup/Popup.tsx';
import { StyledFilterWrapper, StyledLabel } from './Filter.styles.ts';
import { FilterProps } from './Filter.types';

const Filter: React.FC<FilterProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <StyledFilterWrapper $active={open} onClick={() => setOpen((prev) => !prev)}>
      <Icon name='Filter' width={16} height={16} fill='#1d1f24' />
      <StyledLabel>Filter</StyledLabel>
      <Popup isOpen={open} onClose={() => setOpen(false)}>
        <div>ahmad</div>
      </Popup>
    </StyledFilterWrapper>
  );
};
export default Filter;
