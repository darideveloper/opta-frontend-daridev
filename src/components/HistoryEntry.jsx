// Libs
import { useState } from "react"

// Components
import Button from "./Button"
import { useChatStore } from "../../stores/chat-store"


export default function HistoryEntry ({momento, messages, index}) {

  const [isOpen, setIsOpen] = useState(false)
  const addMessage = useChatStore(state => state.addMessage)

  return (
    <div
      className={`
        w-full
      `}
    >
      {/* Momento */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        isActive={isOpen}
        isActiveHover={false}
      >
        {index + 1}) {momento.name}
      </Button>

      {/* Submomentos */}
      <div
        className={`
          ml-4
          flex-col
          gap-2
          items-start
          justify-start
          my-4
          ${isOpen ? 'flex' : 'hidden'}
        `}
      >
        {
          messages.map((message, index) => {

            let recoveryMessage = 'Recuperado de "' + momento.name + '", '
            recoveryMessage += '"' + message.user + '", '
            recoveryMessage += '(' + message.datetime + ')'

            return (
              <Button
                key={index}
                onClick={() => 
                  addMessage({
                    user: recoveryMessage,
                    response: message.response,
                    type: "recovery",
                  })
                }
                type="small"
              >
                {message.user} - {message.datetime}
              </Button>
            )
          })
        }
      </div>
    </div>
  )
}