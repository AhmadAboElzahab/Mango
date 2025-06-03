import styled from 'styled-components';
import Select from 'react-select';
// Styled Components
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

export const ColumnContainer = styled.div<{ $isCurrency?: boolean }>`
  flex: 1;
  ${({ $isCurrency }) =>
    $isCurrency &&
    `
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: space-between;
  `}
`;

export const OperatorContainer = styled.div`
  flex: 1;
`;

export const ValueContainer = styled.div`
  flex: 1.5;
  display: flex;
  gap: 0.5rem;
`;

export const FlexOneContainer = styled.div`
  flex: 1;
`;

export const FlexThreeHalfContainer = styled.div`
  flex: 3.5;
`;

export const StyledSelect = styled(Select)`
  .react-select__control {
    border: 1px solid #d1d5db;
    border-radius: 8px;
  }
`;

export const StyledInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const DateInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const NumberInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;
