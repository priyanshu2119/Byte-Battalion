import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  devId: string;
  name: string;
  handle: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
}

interface AppState {
  user: User | null;
  users: Record<string, User>;
  theme: 'light' | 'dark' | 'system';
  simpleNav: boolean;
  reducedMotion: boolean;
  setUser: (user: User | null) => void;
  addUser: (user: User) => void;
  getUserById: (devId: string) => User | null;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setSimpleNav: (enabled: boolean) => void;
  setReducedMotion: (enabled: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      user: null,
      users: {},
      theme: 'dark',
      simpleNav: false,
      reducedMotion: false,
      setUser: (user) => set({ user }),
      addUser: (user) => set((state) => ({
        users: { ...state.users, [user.devId]: user }
      })),
      getUserById: (devId) => get().users[devId] || null,
      setTheme: (theme) => set({ theme }),
      setSimpleNav: (enabled) => set({ simpleNav: enabled }),
      setReducedMotion: (enabled) => set({ reducedMotion: enabled }),
    }),
    {
      name: 'devorbit-storage',
      version: 1,
      migrate: (persistedState: any, version: number) => {
        if (version === 0) {
          // Migration from old state without users object
          return {
            ...persistedState,
            users: {},
          };
        }
        return persistedState;
      },
    }
  )
);
