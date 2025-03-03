import { create } from 'zustand'
import { getFormattedDateTime } from '../libs/datetime'

/**
 * @typedef {Object} Response
 * @property {string} title - The title of the response.
 * @property {string} content - The content of the response.
 * @property {Document[]} documentos - The list of documents associated with the response.
 * @property {number} documentos[].id - The identifier of the document.
 * @property {string} documentos[].nombre - The name of the document.
 * @property {string} documentos[].archivo - The URL of the document.
 * @property {string} documentos[].palabras_clave - The keywords of the document.
 */


/**
 * @typedef {Object} Message
 * @property {string} user - Message sent by the user
 * @property {string} datetime - Datetime when the message was sent with the format "dd/mm hh:mm:ss"
 * @property {Response[]} response - The list of responses associated with the message.
 */

/**
 * @typedef {Object} HistoryEntry
 * @property {number} momento - The moment identifier for the chat session.
 * @property {Message[]} messages - The list of messages associated with this moment.
 */

/**
 * Zustand store for managing chat state.
 */
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