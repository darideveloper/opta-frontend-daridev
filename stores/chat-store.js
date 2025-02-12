import { create } from 'zustand'

export const useChatStore = create((set) => ({
  momento: null,
  messages: [],
  setMomento: (momento) => set({ momento }),
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  resetMessages: () => set({ messages: [] })
}))