import { create } from 'zustand'

export const useChatStore = create((set) => ({
  momento: null,
  subMomento: null,
  setMomento: (momento) => set({ momento }),
  setSubMomento: (subMomento) => set({ subMomento }),
}))