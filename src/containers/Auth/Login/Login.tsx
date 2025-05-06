import React from 'react';
import { LoginValues } from 'types/auth';

import LoginForm from '../../../components/Forms/Login/Login';
import { useLoginMutation } from '../../../core/services/auth.service';

const LoginContainer: React.FC = () => {
  const { mutate: login, data, isPending } = useLoginMutation();

  const handleLoginSubmit = async (values: LoginValues) => {
    login(values);
  };
  return <LoginForm onSubmit={handleLoginSubmit} />;
};

export default LoginContainer;
