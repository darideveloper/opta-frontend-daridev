import { create } from 'zustand'

export const useChatStore = create((set) => ({
  momento: "",
  setMomento: (momento) => set({ momento }),
}))