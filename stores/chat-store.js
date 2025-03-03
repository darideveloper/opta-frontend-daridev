import { create } from 'zustand'
import { getFormattedDateTime } from '../libs/datetime'

export const useChatStore = create((set) => ({
  momento: null,
  lastMomento: null,
  messages: [],
  history: [],
  showHistory: false,
  setMomento: (momento) => set({ momento }),
  addMessage: (message) => {
    set((state) => {

      let stateData = {}

      // Save history

      // Create new momento in history if it's different from the last one
      if (state.momento !== state.lastMomento || state.lastMomento === null) {
        stateData['history'] = [...state.history, { 
          "momento": state.momento,
          "messages": [message]
        }]
      } else {
        // Save message in last momento
        const lastMomento = state.history[state.history.length - 1]
        const messages = lastMomento.messages
        lastMomento['messages'] = [...messages, message]
        stateData['history'] = [...state.history.slice(0, -1), lastMomento]
      }

      // Save message
      message['datetime'] = getFormattedDateTime()
      stateData['messages'] = [...state.messages, message]

      // Save last momento
      stateData['lastMomento'] = state.momento

      // Return state data
      return stateData
    })
  },
  resetMessages: () => set({ messages: [] }),
  toggleHistory: () => set((state) => ({ showHistory: !state.showHistory }))
}))