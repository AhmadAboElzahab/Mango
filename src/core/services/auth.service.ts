import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { login, LoginDto, LoginResponse } from './api.service';
import { useAuth } from 'hooks/useAuth';

export function useLoginMutation() {
  const { login: loginFn } = useAuth();

  return useMutation<LoginResponse, AxiosError, LoginDto>({
    mutationKey: ['login'],
    mutationFn: login,
    onSuccess: (data) => {
      loginFn(data);
    },
  });
}
