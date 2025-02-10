
// Libs
import { useState, useEffect } from "react"
import { useChatStore } from "../../stores/chat-store"

// Icons
import { CircleChevronDown, CircleChevronUp } from "lucide-react"

// Components
import HistoryComponent from "../components/History"
import Sidebar from "../components/Sidebar"
import ChatHeader from "../components/chat/ChatHeader"
import ChatMessages from "../components/chat/ChatMessages"


const Chat = () => {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState("")
  const [showHistorial, setShowHistorial] = useState(false)
  const [showNewConversation, setShowNewConversation] = useState(false)
  const [selectedSubMoments, setSelectedSubMoments] = useState([])

  // Zustand store
  const momento = useChatStore((state) => state.momento)

  // Api data
  const [dataTipoLead, setDataTipoLead] = useState([])
  const [dataSubmomento, setDataSubmomento] = useState([])
  const [dataRespuesta, setDataRespuesta] = useState([])

  useEffect(() => {
    console.log("Momento:", momento)
  }, [momento])

  const handleSubMomentClick = (subMoment) => {
    const responses = dataRespuesta
      .filter((r) => r.submomento === subMoment.id)
      .map((r) => r.contenido) // Extrae solo el contenido de cada respuesta

    const responseText = responses.length > 0 ? responses.join("\n\n") : "No hay una respuesta definida para este submomento."

    const now = new Date()
    const formattedDate = now.toISOString()

    setMessages((prevMessages) => [
      ...prevMessages,
      { content: responseText, title: "ChatBot", timestamp: formattedDate }
    ])
  }


  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const now = new Date()
      const formattedDate = now.toISOString()
      const newMessage = { content: inputMessage, title: "Usuario", timestamp: formattedDate }

      setMessages((prevMessages) => [...prevMessages, newMessage])
      setInputMessage("")
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">

      <Sidebar />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">

        <ChatHeader />
        <ChatMessages messages={messages} />
        

        {/* Chatbox */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex space-x-2">
            {/* Render submomentos of the current momento */}
            {dataSubmomento.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {dataSubmomento.map((subMoment) => (
                    <button
                      key={subMoment.id}
                      onClick={() => handleSubMomentClick(subMoment)}
                      className="px-3 py-1 rounded-full border-2 border-[#7D3C98] text-sm hover:bg-[#7D3C98] hover:text-white transition-colors"
                    >
                      {subMoment.nombre}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex mt-4">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[#7D3C98]"
              placeholder="Escribe un mensaje..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-[#7D3C98] text-white rounded-r-md hover:bg-[#7D3C98]"
              onClick={handleSendMessage}
            >
              ENVIAR
            </button>
          </div>
        </div>
      </div>

      {/* Historial Sidebar */}
      {showHistorial && <HistoryComponent messages={messages} onClose={() => setShowHistorial(false)} />}

      {/* Nueva Conversación Modal */}
      {showNewConversation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Nueva Conversación</h2>
              <button onClick={() => setShowNewConversation(false)} className="text-gray-500 hover:text-gray-700">
                ×
              </button>
            </div>
            <p className="text-gray-600 mb-4">¿Estás seguro de que deseas iniciar una nueva conversación?</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowNewConversation(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setMessages([])
                  setShowNewConversation(false)
                }}
                className="px-4 py-2 bg-[#7D3C98] text-white rounded-md hover:bg-[#7D3C98]"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chat