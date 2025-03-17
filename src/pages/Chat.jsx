
// Libs
import { useState } from "react"

// Components
import HistoryComponent from "../components/History"
import Sidebar from "../components/Sidebar"
import ChatHeader from "../components/chat/ChatHeader"
import ChatMessages from "../components/chat/ChatMessages"
import ChatTextBox from "../components/chat/ChatTextBox"
import Footer from "../components/Footer"


const Chat = () => {
  
  // States
  const [messages, setMessages] = useState([])
  const [showNewConversation, setShowNewConversation] = useState(false)

  return (

    <div>
      <main className="flex h-screen bg-gray-100">

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

      </main>

      <Footer />
      
    </div>

  )
}

export default Chat