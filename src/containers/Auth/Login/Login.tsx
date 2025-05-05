import React from 'react';
import LoginForm from '../../../components/Forms/Login/Login';
import { LoginValues } from '../../../components/Forms/Login/Login.types';

const LoginContainer: React.FC = () => {
  const handleLoginSubmit = async (values: LoginValues) => {
    console.log('Form submitted from container:', values);
    // Call your API, mutate state, etc.
  };

  return <LoginForm onSubmit={handleLoginSubmit} />;
};

export default LoginContainer;
