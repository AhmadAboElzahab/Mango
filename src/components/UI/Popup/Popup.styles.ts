// Popup.styles.ts
import styled from 'styled-components';

export const PopupWrapper = styled.div`
  position: absolute;
  top: calc(100% + 8px); /* Directly below the button */
  left: 0;
  z-index: 999;
`;

export const PopupContainer = styled.div`
  background: white;
  padding: 0.75rem 1rem;
  border-radius: 3px;
  box-shadow:
    0px 0px 1px rgba(0, 0, 0, 0.24),
    0px 0px 2px rgba(0, 0, 0, 0.16),
    0px 3px 4px rgba(0, 0, 0, 0.06),
    0px 6px 8px rgba(0, 0, 0, 0.06),
    0px 12px 16px rgba(0, 0, 0, 0.08),
    0px 18px 32px rgba(0, 0, 0, 0.06);
`;
