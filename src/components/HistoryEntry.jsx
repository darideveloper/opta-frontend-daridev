// Libs
import { useState } from "react"

// Components
import Button from "./Button"


export default function HistoryEntry ({momento, messages, index}) {

  const [isOpen, setIsOpen] = useState(false)

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
            return (
              <Button
                key={index}
                onClick={() => alert('Submomento')}
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