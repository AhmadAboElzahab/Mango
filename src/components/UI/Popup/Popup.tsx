import type React from 'react';
import { useEffect } from 'react';
import ClickAwayListener from 'react-click-away-listener';

import type { PopupProps } from './Popup.types';

export const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ClickAwayListener onClickAway={onClose}>
      <div className='absolute top-[calc(100%+8px)] left-0 z-999'>
        <div className='bg-white px-4 py-3 rounded-sm shadow-[0px_0px_1px_rgba(0,0,0,0.24),0px_0px_2px_rgba(0,0,0,0.16),0px_3px_4px_rgba(0,0,0,0.06),0px_6px_8px_rgba(0,0,0,0.06),0px_12px_16px_rgba(0,0,0,0.08),0px_18px_32px_rgba(0,0,0,0.06)]'>
          {children}
        </div>
      </div>
    </ClickAwayListener>
  );
};
