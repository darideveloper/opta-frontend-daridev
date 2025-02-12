// Libs
import { useState, useEffect } from 'react'
import { useChatStore } from "../../../stores/chat-store"
import { getSubmomento } from "../../api/chatbot.api"
import { getRespuesta } from "../../api/chatbot.api"


export default function ChatTextBox() {

  // Zustand store
  const momento = useChatStore((state) => state.momento)
  const addMessage = useChatStore(state => state.addMessage)
  const resetMessages = useChatStore(state => state.resetMessages)

  const messages = useChatStore((state) => state.messages)

  // States
  const [dataSubmomentos, setDataSubmomentos] = useState([])
  const [selectedSubMomento, setSelectedSubMomento] = useState(null)

  // handlers
  function handleSendMessage() {
    // TODO: Send message logic
    alert('Mensaje enviado')
  }

  function handleSubMomentClick(subMomentId, subMomentoText) {

    // Get responses from api
    if (subMomentId === null || momento === "") {
      // Reset moments
      resetMessages()
    } else {
      // Add messages
      getRespuesta(subMomentId).then(respuestas => {
        addMessage({
          user: subMomentoText,
          response: respuestas.data.map(respuesta => ({
            title: respuesta.titulo,
            content: respuesta.contenido
          }))
        })
      })
    }
  }

  useEffect(() => {
    if (momento === null) {
      // Reset submoments
      setDataSubmomentos([])
    } else {
      getSubmomento(momento).then(submomentos => {
        setDataSubmomentos(submomentos.data)
      })      
    }
  }, [momento])

  useEffect(() => {
    console.log({messages})
  }, [messages])

  const [inputMessage, setInputMessage] = useState('')

  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <div className="flex space-x-2">
        {/* Render submomentos of the current momento */}
        {dataSubmomentos.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {dataSubmomentos.map((subMoment) => (
                <button
                  key={subMoment.id}
                  onClick={() => handleSubMomentClick(subMoment.id, subMoment.nombre)}
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
          placeholder="Escribe palabras clave para buscar archivos"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-[#7D3C98] text-white rounded-r-md hover:bg-[#7D3C98] uppercase"
          onClick={handleSendMessage}
        >
          Consultar
        </button>
      </div>
    </div>
  )
}