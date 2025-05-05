import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { login, LoginDto, LoginResponse } from './api.service';
import { useAuthStore } from 'store/auth.store';

export function useLoginMutation() {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation<LoginResponse, AxiosError, LoginDto>({
    mutationKey: ['login'],
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data);
    },
  });
}
