
// Libs
import { useState } from "react"

// Components
import History from "../components/History"
import Sidebar from "../components/Sidebar"
import ChatHeader from "../components/chat/ChatHeader"
import ChatMessages from "../components/chat/ChatMessages"
import ChatTextBox from "../components/chat/ChatTextBox"
import Footer from "../components/Footer"
import Profile from "../components/Profile"


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
        <History 
          messages={[]} 
          onClose={() => {}}
        />

        {/* Profile sidebar */}
        <Profile />

      </main>

      <Footer />
      
    </div>

  )
}

export default Chat