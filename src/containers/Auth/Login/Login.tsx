import React from 'react';
import LoginForm from '../../../components/Forms/Login/Login';
import { LoginValues } from '../../../components/Forms/Login/Login.types';
import { useLoginMutation } from '../../../core/services/auth.service';

const LoginContainer: React.FC = () => {
  const { mutate: login, data, isPending } = useLoginMutation();

  const handleLoginSubmit = async (values: LoginValues) => {
    login(values);
  };

  return <LoginForm onSubmit={handleLoginSubmit} />;
};

export default LoginContainer;
