import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { login, LoginDto, LoginResponse } from './api.service';

export function useLoginMutation() {
  return useMutation<LoginResponse, AxiosError, LoginDto>({
    mutationKey: ['login'],
    mutationFn: login,
  });
}
