import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import * as S from './Popup.styles';
import { PopupProps } from './Popup.types';

export const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  children,
  className,
  portalTarget = document.body,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsClosing(true);
        setTimeout(onClose, 200);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen && !isClosing) return null;

  return ReactDOM.createPortal(
    <S.Overlay isClosing={isClosing}>
      <S.PopupContainer ref={ref} className={className}>
        {children}
      </S.PopupContainer>
    </S.Overlay>,
    portalTarget,
  );
};
