import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 1rem;
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const StyledInput = styled.input`
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

export const StyledButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.em`
  color: red;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;
