// Libs
import { useState, useEffect } from 'react'
import { useChatStore } from "../../../stores/chat-store"
import { getSubmomento } from "../../api/chatbot.api"
import { getRespuesta } from "../../api/chatbot.api"
import { getdocumentos } from "../../api/chatbot.api"

export default function ChatTextBox() {

  // Zustand store
  const momento = useChatStore((state) => state.momento)
  const addMessage = useChatStore(state => state.addMessage)
  const resetMessages = useChatStore(state => state.resetMessages)

  const messages = useChatStore((state) => state.messages)

  // States
  const [dataSubmomentos, setDataSubmomentos] = useState([])
  const [inputMessage, setInputMessage] = useState('')

  // handlers
  function handleSendMessage(e) {

    // Prevent default
    e.preventDefault()

    // Get tags from user message
    const tags = inputMessage.split(" ")
    const tagsString = tags.join(",")
    getdocumentos(tagsString).then(documentos => {

      // Change response if there are no documents
      let response
      if (documentos.data.length == 0) {
        response = [{
          title: "No se encontraron resultados",
          content: "Intenta con otras palabras clave",
          documentos: []
        }]
      } else {
        response = [{
          title: "Documentos encontrados",
          content: "Estos son los documentos encontrados con tu búsqueda",
          documentos: documentos.data
        }]
      }
      
      
      // Save a new message with all documents found
      addMessage({
        user: inputMessage,
        response: response
      })
    })

    setInputMessage('')
  }

  function handleSubMomentClick(subMomentId, subMomentoText) {

    // Get responses from api
    if (subMomentId === null || momento === "") {
      // Reset moments
      resetMessages()
    } else {
      // Add messages
      getRespuesta(subMomentId).then(respuestas => {

        let respuestasData = respuestas.data.map(respuesta => ({
          title: respuesta.titulo,
          content: respuesta.contenido,
          documentos: respuesta.documento ? [respuesta.documento] : [],
        }))

        if (respuestasData.length == 0) {
          respuestasData = [{
            title: "No se encontraron resultados",
            content: "Inetnte otra opción",
            documentos: [],
          }]
        }

        addMessage({
          user: subMomentoText,
          response: respuestasData
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

      <form 
        className="flex mt-4"
        onSubmit={handleSendMessage}
      >
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[#7D3C98]"
          placeholder="Escribe palabras clave para buscar archivos"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-[#7D3C98] text-white rounded-r-md hover:bg-[#7D3C98] uppercase"
        >
          Consultar
        </button>
      </form>
    </div>
  )
}