// // src/store/authStore.js
// import { create } from 'zustand';

// export const useAuthStore = create((set) => ({
//   user: null,

//   // Set user after login
//   setUser: (userData) => set({ user: userData }),

//   // Clear user on logout
//   logout: () => set({ user: null }),
// }));


// src/store/authStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,

      // Set user after login
      setUser: (userData) => set({ user: userData }),

      // Clear user on logout
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage', // unique key in localStorage
      getStorage: () => localStorage, // defaults to localStorage but explicit here
    }
  )
);
