// Libs
import { useChatStore } from "../../../stores/chat-store"
import { useEffect } from "react"

// Components
import StepsCards from "../StepsCards"


/**
 * ChatMessages component
 * @returns {JSX.Element}
 */
export default function ChatMessages() {

  // Zustand store
  const messages = useChatStore((state) => state.messages)

  // Effects
  useEffect(() => {
    // Scroll to bottom
    const chat = document.querySelector('.chat-messages')
    chat.scrollTop = chat.scrollHeight
  }, [messages])


  return (
    <div 
      className={`
        chat-messages
        flex-1
        overflow-y-auto
        p-4
        bg-gray-50
        scroll-smooth
      `}
    >

      {messages.map(({user, response}, index) => (
        <div
          key={index}
          className={`
            mb-8
          `}
        >
          <p
            className={`
              mb-2
              capitalize
              italic
              font-bold
            `}
          >
            {user}
          </p>

          <StepsCards 
            steps={response}
          />
          
        </div>
      ))}

    </div>
  )
}
