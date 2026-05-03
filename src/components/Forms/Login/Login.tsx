import { AnyFieldApi, useForm } from '@tanstack/react-form';
import React from 'react';
import { loginSchema } from 'types/auth';

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
    <form
      className="flex flex-col max-w-100 gap-4 mx-auto p-8 bg-[#f9f9f9] rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.Field name='email'>
        {(field) => (
          <div className="flex flex-col">
            <label htmlFor={field.name} className="ml-1 text-[13px] text-[#1d1f24] font-normal">
              Email
            </label>
            <input
              id={field.name}
              name={field.name}
              type='email'
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.handleChange(e.target.value)
              }
              className="px-[0.8rem] py-[0.6rem] text-base border border-[#ccc] rounded focus:border-[#0070f3] focus:outline-none"
            />
            <FieldInfo field={field} />
          </div>
        )}
      </form.Field>
      <form.Field name='password'>
        {(field) => (
          <div className="flex flex-col">
            <label htmlFor={field.name} className="ml-1 text-[13px] text-[#1d1f24] font-normal">
              Password
            </label>
            <input
              id={field.name}
              name={field.name}
              type='password'
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.handleChange(e.target.value)
              }
              className="px-[0.8rem] py-[0.6rem] text-base border border-[#ccc] rounded focus:border-[#0070f3] focus:outline-none"
            />
            <FieldInfo field={field} />
          </div>
        )}
      </form.Field>

      <button
        type='submit'
        disabled={form.state.isSubmitting}
        className="py-3 text-base bg-[#0070f3] text-white border-none rounded cursor-pointer disabled:bg-[#ccc] disabled:cursor-not-allowed"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
