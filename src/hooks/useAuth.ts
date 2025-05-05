import { useAuthStore } from 'store/auth.store';
import { useRouter } from '@tanstack/react-router';
import { LoginResponse } from 'core/services/api.service';

export function useAuth() {
  const router = useRouter();

  const user = useAuthStore((s) => s.user);
  const token = useAuthStore((s) => s.user?.token);
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.logout);

  const login = (response: LoginResponse) => {
    setUser({ token: response.token });
    router.navigate({ to: '/' });
  };

  const logout = () => {
    clearUser();
    router.navigate({ to: '/auth/login' });
  };

  return {
    user,
    token,
    isAuthenticated: !!user?.token,
    login,
    logout,
  };
}
