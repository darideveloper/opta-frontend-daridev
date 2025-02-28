
// Libs
import { useState } from "react"

// Components
import HistoryComponent from "../components/History"
import Sidebar from "../components/Sidebar"
import ChatHeader from "../components/chat/ChatHeader"
import ChatMessages from "../components/chat/ChatMessages"
import ChatTextBox from "../components/chat/ChatTextBox"


const Chat = () => {
  
  // States
  const [messages, setMessages] = useState([])
  const [showNewConversation, setShowNewConversation] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">

      <Sidebar />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">

        <ChatHeader />
        <ChatMessages messages={messages} />
        <ChatTextBox />
        
      </div>

      {/* Historial Sidebar */}
      <HistoryComponent 
        messages={[]} 
        onClose={() => {}}
      />

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