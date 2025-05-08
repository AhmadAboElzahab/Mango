// Popup.tsx
import React, { useEffect } from 'react';
import ClickAwayListener from 'react-click-away-listener';

import * as S from './Popup.styles';
import { PopupProps } from './Popup.types';

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
      <S.PopupWrapper>
        <S.PopupContainer>{children}</S.PopupContainer>
      </S.PopupWrapper>
    </ClickAwayListener>
  );
};
