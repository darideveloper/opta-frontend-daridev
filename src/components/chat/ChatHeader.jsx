import { History } from "lucide-react"


export default function ChatHeader() {
  return (
    <div className={`
      bg-white
        px-4
        py-8
        shadow
        flex
        flex-col sm:flex-row
        justify-between
        items-center
        gap-4
      `}>

      <button
        // onClick={() => setShowNewConversation(true)}
        onClick={() => alert("Nueva Conversación")}
        className="bg-[#7D3C98] text-white px-4 py-2 rounded-md hover:bg-blue-900"
      >
        Nueva Conversación
      </button>
      <button
        // onClick={() => setShowHistorial(true)}
        onClick={() => alert("Historial")}
        className="bg-[#7D3C98] flex items-center space-x-2 text-white px-4 py-2 rounded-md hover:bg-blue-900"
      >
        <History className="w-5 h-5" />
        <span>Historial</span>
      </button>
    </div>
  )
}