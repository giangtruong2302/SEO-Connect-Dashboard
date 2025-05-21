import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio: string;
  role: string;
  avatar?: string;
  phone?: string;
  location?: string;
  website?: string;
  company?: string;
  jobTitle?: string;
}

interface UserState {
  user: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  updateUser: (data: Partial<UserProfile>) => void;
  setUser: (user: UserProfile) => void;
  clearUser: () => void;
}

// Mock initial user data (in a real app, this would come from API)
const mockUser: UserProfile = {
  id: "user-001",
  name: "Dyno Duong",
  email: "giangdev.2302@gmail.com",
  bio: "Software developer with 5 years of experience",
  role: "Developer",
  phone: "+84 337 657 xxx",
  location: "Ho Chi Minh City, Vietnam",
  website: "https://dyno.io.vn",
  company: "Tech Innovations Inc.",
  jobTitle: "Senior Developer",
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: mockUser, // For demo purposes, initialize with mock data
      isLoading: false,
      error: null,
      updateUser: (data) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        })),
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage", // unique name for localStorage
    }
  )
);
