
// Libs
import { useChatStore } from "../../stores/chat-store"
import { useEffect } from "react"

const HistoryComponent = ({ messages }) => {

  // Zustand store
  const toggleHistory = useChatStore(state => state.toggleHistory)
  const showHistorial = useChatStore(state => state.showHistory)
  const history = useChatStore(state => state.history)
  const lastMomento = useChatStore(state => state.lastMomento)
  const momento = useChatStore(state => state.momento)

  useEffect(() => {
    console.log({ history, lastMomento, momento })
  }, [history, lastMomento, momento])

  return (
    <div
      className={`
        w-80 
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
        <button
          onClick={() => toggleHistory()}
          className="text-gray-500 hover:text-gray-700 text-4xl flex"
        >
          x
        </button>
      </div>

      {/* messages */}
      <div className="space-y-4">
        {messages.map((message, index) => {
          return (
            <div key={index} className="p-2 bg-gray-100 rounded-md shadow">
              <p className="font-medium text-[#7D3C98]">{message.title}</p>
              <p>{message.content}</p>
              <p className="text-sm text-gray-500">{message.timestamp}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default HistoryComponent