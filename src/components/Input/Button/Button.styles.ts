import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  border: none;
  transition: all 0.2s ease;

  &.primary {
    background-color: #007bff;
    color: white;

    &:hover:not(:disabled) {
      background-color: #0069d9;
    }
  }

  &.secondary {
    background-color: #6c757d;
    color: white;

    &:hover:not(:disabled) {
      background-color: #5a6268;
    }
  }

  &.danger {
    background-color: #dc3545;
    color: white;

    &:hover:not(:disabled) {
      background-color: #c82333;
    }
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;
