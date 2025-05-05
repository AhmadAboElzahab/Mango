import { useMutation } from '@tanstack/react-query';
import { login, LoginDto, LoginResponse } from './api.service';
import { AxiosError } from 'axios';

export function useLoginMutation() {
  return useMutation<LoginResponse, AxiosError, LoginDto>({
    mutationKey: ['login'],
    mutationFn: login,
  });
}
