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


  // useEffect(() => {
  //   if (subMomento === null) {
  //     // Reset submoments
  //     setDataSubmomentos([])
  //   } else {
  //     getSubmomento(momento).then(submomentos => {
  //       setDataSubmomentos(submomentos.data)
  //     })
  //   }
  // }, [momento])

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">

      {messages.map(({user, response}, index) => (
        <div
          key={index}
        >
          <p>{user}</p>

          <StepsCards 
            steps={response}
          />
        </div>
      ))}

    </div>
  )
}
