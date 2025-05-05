import { AnyFieldApi, useForm } from '@tanstack/react-form';
import React from 'react';
import { loginSchema } from 'types/auth';

import { FieldWrapper, FormWrapper, StyledButton, StyledInput, StyledLabel } from './Login.styles';
import { LoginFormProps } from './Login.types';

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid && (
        <ul style={{ color: 'red', paddingLeft: '1em' }}>
          {field.state.meta.errors.map((error: any, idx: number) => (
            <li key={idx}>{error.message}</li>
          ))}
        </ul>
      )}
    </>
  );
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value);
    },
  });

  return (
    <FormWrapper
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.Field name='email'>
        {(field) => (
          <FieldWrapper>
            <StyledLabel htmlFor={field.name}>Email</StyledLabel>
            <StyledInput
              id={field.name}
              name={field.name}
              type='email'
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.handleChange(e.target.value)
              }
            />
            <FieldInfo field={field} />
          </FieldWrapper>
        )}
      </form.Field>
      <form.Field name='password'>
        {(field) => (
          <FieldWrapper>
            <StyledLabel htmlFor={field.name}>Password</StyledLabel>
            <StyledInput
              id={field.name}
              name={field.name}
              type='password'
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.handleChange(e.target.value)
              }
            />
            <FieldInfo field={field} />
          </FieldWrapper>
        )}
      </form.Field>

      <StyledButton type='submit' disabled={form.state.isSubmitting}>
        Login
      </StyledButton>
    </FormWrapper>
  );
};

export default LoginForm;
