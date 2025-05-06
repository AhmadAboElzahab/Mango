import React, { useState } from 'react';

import { StyledToolbar } from './Toolbar.styles.ts';
import { ToolbarProps } from './Toolbar.types';
import { Popup } from '../Popup/Popup.tsx';

const Toolbar: React.FC<ToolbarProps> = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <StyledToolbar>
      <div style={{ position: 'relative' }}>
        <button onClick={() => setOpen(true)}>Open Popup</button>
        <Popup isOpen={open} onClose={() => setOpen(false)}>
          <div>
            <p>This is a reusable popup.</p>
          </div>
        </Popup>
      </div>

      <div style={{ position: 'relative' }}>
        <button onClick={() => setOpen1(true)}>Open Another</button>
        <Popup isOpen={open1} onClose={() => setOpen1(false)}>
          <div>
            <p>This is another popup.</p>
          </div>
        </Popup>
      </div>
    </StyledToolbar>
  );
};
export default Toolbar;
