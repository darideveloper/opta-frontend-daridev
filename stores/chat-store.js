import { create } from 'zustand'

export const useChatStore = create((set) => ({
  momento: null,
  messages: [],
  history: [],
  showHistory: false,
  setMomento: (momento) => set({ momento }),
  addMessage: (message) => {
    set((state) => ({ messages: [...state.messages, message] }))
    const historyMessage = {
      "momento": state.momento,
      "message": message
    }
    set((state) => ({ history: [...state.history, historyMessage] }))
  },
  resetMessages: () => set({ messages: [] }),
  toggleHistory: () => set((state) => ({ showHistory: !state.showHistory }))
}))