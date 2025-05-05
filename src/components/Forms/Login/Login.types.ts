import { LoginValues } from 'types/auth';

export interface LoginFormProps {
  onSubmit: (values: LoginValues) => void;
}
