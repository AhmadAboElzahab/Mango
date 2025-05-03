// Login.types.ts
import { useForm } from '@tanstack/react-form';

// Define your form values type explicitly
export type LoginFormValues = {
  email: string;
  password: string;
};

// Use the generic parameter in the useForm type
export type LoginForm = ReturnType<typeof useForm<LoginFormValues>>;

export interface LoginProps {
  form: LoginForm;
}
