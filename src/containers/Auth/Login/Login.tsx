import React from 'react';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { LoginForm } from '../../../components/Forms/Login/Login';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const LoginContainer: React.FC = () => {
  const form = useForm({
    defaultValues: { email: '', password: '' },
    onSubmit: async ({ value }) => {
      // API call or auth logic here
      console.log('Login values:', value);
    },
  });

  return <LoginForm form={form} />;
};

export default LoginContainer;
