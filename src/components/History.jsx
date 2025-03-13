
// Libs
import { useChatStore } from "../../stores/chat-store"
import { useEffect } from "react"

// Components
import HistoryEntry from "./HistoryEntry"
import ButtonClose from "./ButtonClose"


const HistoryComponent = ({ messages }) => {

  // Zustand store
  const toggleHistory = useChatStore(state => state.toggleHistory)
  const showHistorial = useChatStore(state => state.showHistory)
  const history = useChatStore(state => state.history)

  // Effects
   useEffect(() => {
    // Scroll to bottom
    const chat = document.querySelector('.history-entries')
    chat.scrollTop = chat.scrollHeight
  }, [history, showHistorial])

  return (
    <div
      className={`
        w-96
        bg-white
        h-full
        px-6
        py-8
        fixed
        top-0
        duration-300
        ${showHistorial ? 'right-0' : '-right-96'}
        shadow-2xl
      `}>
      <div className="flex justify-between items-center mb-4">

        {/* Header */}
        <h2 className="text-xl font-bold">Historial</h2>
        
        <ButtonClose 
          onClick={() => toggleHistory()}
        />
      </div>

      {/* History items */}
      <div
        className={`
          history-entries
          flex
          flex-col
          gap-2
          items-start
          justify-start
          w-full
          h-[88vh]
          overflow-y-scroll
          pr-2
        `}
      >
        {
          history.map((entry, index) => {
            return (
              <HistoryEntry 
                key={index}
                momento={entry.momento}
                messages={entry.messages}
                index={index}
              />
            )
          })
        }
      </div>
    </div>
  )
}
export default HistoryComponent