
// Libs
import { useChatStore } from "../../stores/chat-store"
import { useEffect } from "react"

// Components
import HistoryEntry from "./HistoryEntry"
import ButtonClose from "./ButtonClose"


const HistoryComponent = () => {

  // Zustand store
  const toggleProfile = useChatStore(state => state.toggleProfile)
  const showProfile = useChatStore(state => state.showProfile)

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
        ${showProfile ? 'right-0' : '-right-96'}
        shadow-2xl
      `}>

      <div className="flex justify-between items-center mb-4">

        {/* Header */}
        <h2 className="text-xl font-bold">Perfil</h2>
        
        <ButtonClose 
          onClick={() => toggleProfile()}
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
        <p>Content</p>
      </div>
    </div>
  )
}
export default HistoryComponent