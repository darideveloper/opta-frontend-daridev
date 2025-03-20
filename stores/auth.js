import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  token: sessionStorage.getItem("token", ""),
  setToken: (token) => { 
    sessionStorage.setItem("token", token)
    set({ token })
  },
  deleteToken: () => { 
    sessionStorage.setItem("token", "")
    set({ token: "" }) 
  }
}))