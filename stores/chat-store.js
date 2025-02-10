import { create } from 'zustand'

export const useChatStore = create((set) => ({
  momento: null,
  setMomento: (momento) => set({ momento }),
}))