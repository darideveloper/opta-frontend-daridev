// Libs
import { useState, useEffect } from 'react'
import { getSubmomento } from "../../api/chatbot.api"
import { getRespuesta } from "../../api/chatbot.api"
import { getDocumentos } from "../../api/chatbot.api"

// Zustand
import { useChatStore } from "../../../stores/chat-store"
import { useAuthStore } from '../../../stores/auth'

// Components
import Button from "../Button"
import Input from "../Input"

export default function ChatTextBox() {

  // Zustand store
  const token = useAuthStore(state => state.token)
  const deleteToken = useAuthStore(state => state.deleteToken)

  const momento = useChatStore((state) => state.momento)
  const setMomento = useChatStore((state) => state.setMomento)
  const addMessage = useChatStore(state => state.addMessage)
  const resetMessages = useChatStore(state => state.resetMessages)

  // States
  const [dataSubmomentos, setDataSubmomentos] = useState([])
  const [inputMessage, setInputMessage] = useState('')

  // handlers
  function handleSendMessage(e) {

    // Get tags from user message
    const tags = inputMessage.split(" ")
    const tagsString = tags.join(",")
    getDocumentos(token, deleteToken, tagsString).then(documentos => {

      // Change response if there are no documents
      let response
      if (documentos.length == 0) {
        response = [{
          title: "No se encontraron resultados",
          content: "Intenta con otras palabras clave",
          documentos: []
        }]
      } else {
        response = [{
          title: "Documentos encontrados",
          content: "Estos son los documentos encontrados con tu búsqueda",
          documentos: documentos
        }]
      }
      
      // Save a new message with all documents found
      addMessage({
        user: inputMessage,
        response: response,
        type: "query",
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
      getRespuesta(token, deleteToken, subMomentId).then(respuestas => {

        let respuestasData = respuestas.map(respuesta => ({
          title: respuesta.titulo,
          content: respuesta.contenido,
          image: respuesta.image,
          documentos: respuesta.documento ? [respuesta.documento] : [],
        }))

        if (respuestasData.length == 0) {
          respuestasData = [{
            title: "No se encontraron resultados",
            content: "Intente otra opción",
            documentos: [],
          }]
        }

        addMessage({
          user: subMomentoText,
          response: respuestasData,
          type: "submoment",
        })
      })
    }
  }

  // Effects
  useEffect(() => {
    if (momento === null || momento.id === null) {
      // Reset submoments
      setDataSubmomentos([])
    } else {
      getSubmomento(token, deleteToken, momento.id).then(submomentos => {
        setDataSubmomentos(submomentos)
      })      
    }
  }, [momento])

  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <div className="flex space-x-2">
        {/* Render submomentos of the current momento */}
        {dataSubmomentos.length > 0 && (
          <div className="mb-2">
            <div className="flex flex-wrap gap-2">
              {dataSubmomentos.map((subMoment) => (
                <Button
                  key={subMoment.id}
                  onClick={() => handleSubMomentClick(subMoment.id, subMoment.nombre)}
                  type="small"
                >
                  {subMoment.nombre}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      <form 
        className={`
          flex
          mt-4
          flex-col md:flex-row
        `}
        onSubmit={(e) => e.preventDefault()}
      >
        <Input 
          type="text"
          placeholder="Escribe palabras clave para buscar archivos"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className={`
            md:rounded-none
            md:rounded-l-md
          `}
        />
        <Button
          disabled={inputMessage === ''}
          type="select"
          isActive={true}
          className={`
            w-full md:w-28
            text-center
          `}
          onClick={handleSendMessage}
        >
          Consultar
        </Button>
      </form>
    </div>
  )
}