import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
`;

export const Overlay = styled.div<{ isClosing: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${({ isClosing }) =>
    isClosing
      ? css`
          ${fadeOut} 0.2s forwards
        `
      : css`
          ${fadeIn} 0.2s ease-out
        `};
`;

export const PopupContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  min-width: 300px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
`;
