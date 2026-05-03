import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useAuth } from 'hooks/useAuth';

import { type LoginDto, type LoginResponse, login } from './api.service';

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
