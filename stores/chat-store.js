import { create } from 'zustand'

export const useChatStore = create((set) => ({
  momento: null,
  subMomento: null,
  messages: [
    {
      "user": "Hola, ¿cómo estás?",
      "response": [
        {
          "title": "title test 1",
          "content": "content test 1"
        },
        {
          "title": "title test 2",
          "content": "content test 2"
        },
        {
          "title": "title test 2",
          "content": "content test 3"
        },
      ]
    },
    {
      "user": "Hola, ¿cómo estás? 1",
      "response": [
        {
          "title": "title test 1 2",
          "content": "content test 1 2"
        },
        {
          "title": "title test 2 2",
          "content": "content test 2 2"
        },
        {
          "title": "title test 2",
          "content": "content test 3 2"
        },
      ]
    }
  ],
  setMomento: (momento) => set({ momento }),
  setSubMomento: (subMomento) => set({ subMomento }),
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
}))