import React from 'react';
import { StyledForm, StyledInput, StyledButton } from './Login.styles';
import { LoginProps } from './Login.types';

export const LoginForm: React.FC<LoginProps> = ({ form }) => {
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <label>Email</label>
      <form.Field name='email'>
        {(field) => (
          <StyledInput
            value={field.state.value as string}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      </form.Field>

      <label>Password</label>
      <form.Field name='password'>
        {(field) => (
          <StyledInput
            type='password'
            value={field.state.value as string}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      </form.Field>

      <StyledButton type='submit'>Login</StyledButton>
    </StyledForm>
  );
};
