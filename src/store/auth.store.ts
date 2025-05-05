// stores/authStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import SecureLS from 'secure-ls';
import { User } from 'types/user';

const ls = new SecureLS({ encodingType: 'aes' });

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    },
  ),
);
