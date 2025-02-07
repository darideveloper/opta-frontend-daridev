

import { useState, useEffect } from "react"
import { CircleChevronDown, CircleChevronUp, History } from "lucide-react"
import logo from "../assets/logo.webp"
import HistoryComponent from "../components/History"
import { getTipoLead, getMomento, getPrograma, getRespuesta, getSubmomento, getdocumento } from "../api/chatbot.api"

const Chat = () => {
  const [isNewLead, setIsNewLead] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState("")
  const [showHistorial, setShowHistorial] = useState(false)
  const [showNewConversation, setShowNewConversation] = useState(false)
  const [selectedSubMoments, setSelectedSubMoments] = useState([])
  // const [apiData, setApiData] = useState({
  //   tipoLead: [],
  //   momento: [],
  //   programa: [],
  //   respuesta: [],
  //   submomento: [],
  // })

  // Api data
  const [dataTipoLead, setDataTipoLead] = useState([])
  const [dataPrograma, setDataPrograma] = useState([])
  const [dataMomento, setDataMomento] = useState([])
  const [dataSubmomento, setDataSubmomento] = useState([])
  const [dataRespuesta, setDataRespuesta] = useState([])

  // Chat state
  const [selectedTipoLead, setSelectedTipoLead] = useState(null)
  const [selectedPrograma, setSelectedPrograma] = useState(null)
  const [selectedMomento, setSelectedMomento] = useState(null)

  useEffect(() => {
    async function loadAll() {
      try {
        // const [tipoLeadData, momentoData, programaData, respuestaData, submomentoData, documentoData] = await Promise.all([
        //   getTipoLead(),
        //   getMomento(),
        //   getPrograma(),
        //   getRespuesta(),
        //   getSubmomento(),
        //   getdocumento()
        // ])

        // setApiData({
        //   tipoLead: tipoLeadData.data,
        //   momento: momentoData.data,
        //   programa: programaData.data,
        //   respuesta: respuestaData.data,
        //   submomento: submomentoData.data,
        //   documento: documentoData.data
        // })

        const tipoLead = await getTipoLead()
        setDataTipoLead(tipoLead.data)
        setSelectedTipoLead(tipoLead.data[0]?.id)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    loadAll()
  }, [])

  // Update programs when change tipo lead
  useEffect(() => {
    if (selectedTipoLead === null) {return}

    // Update program options
    getPrograma(selectedTipoLead).then(programas => {
      setDataPrograma(programas.data)
    })

    // Reset selected program
    setSelectedPrograma(null)

  }, [selectedTipoLead])

  // Update moments when change program
  useEffect(() => {
    if (selectedPrograma === null || selectedPrograma === "") {
      // Reset moments
      setDataMomento([])
    } else {
      getMomento(selectedPrograma).then(momentos => {
        setDataMomento(momentos.data)
      })
    }
  }, [selectedPrograma])

  // Update submoments when change moment
  useEffect(() => {
    if (selectedMomento === null) {
      // Reset submoments
      setDataSubmomento([])
    } else {
      getSubmomento(selectedMomento).then(submomentos => {
        setDataSubmomento(submomentos.data)
      })
    }
  }, [selectedMomento])

  // Monitor chat state 
  useEffect(() => {
    console.log({ selectedTipoLead, selectedPrograma, dataTipoLead, selectedMomento })
  }, [selectedTipoLead, selectedPrograma, dataTipoLead, selectedMomento])

  //constantes para hacer pruebas pero el tipoleand funciona desde la constante 
  const tipoLeadNames = dataTipoLead.map((tipo) => tipo.nombre)
  const tipoLeadName = dataTipoLead.length > 0 ? dataTipoLead[0].nombre : "Seguimiento"
  const subMon = dataSubmomento
  const respuesta = dataRespuesta
  // const doc = apiData.documento



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
      {/* Sidebar */}
      <div className="w-64 bg-whiteflex flex-col">
        <div className="p-4">
          <div className="mb-4">

            {/* Logo */}
            <div className="flex items-center border-b border-gray-400 mb-12 py-6">
              <img src={logo || "/placeholder.svg"} alt="Logo" className="w-10/12 mx-auto" />
            </div>

            {/* toggle tipo lead */}
            <div className="toggle flex gap-4">
              <span className="text-sm font-medium">
                {tipoLeadNames[0]}
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={selectedTipoLead == dataTipoLead[0]?.id}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedTipoLead(dataTipoLead[0].id)
                    } else {
                      setSelectedTipoLead(dataTipoLead[1].id)
                    }
                  }}
                />
                <div className="w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all bg-[#7D3C98] rotate-180"></div>
              </label>
              <span className="text-sm font-medium">
                {tipoLeadNames[1]}
              </span>
            </div>
          </div>

          <select 
            className="w-full p-2 border border-gray-300 rounded-md bg-[#7D3C98] text-white"
            onChange={(e) => setSelectedPrograma(e.target.value)}
          >
            <option value="">Programas</option>
            {/* Render programas of current tipo lead */}
            {dataPrograma.map((program) => (
              <option key={program.id} value={program.id}>
                {program.nombre.charAt(0).toUpperCase() + program.nombre.slice(1).toLowerCase()}
              </option>
            ))}
          </select>

        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {/* render momentos of the current programa */}
          {dataMomento.map((moment) => (
            <button
              key={moment.id}
              onClick={() => setSelectedMomento(moment.id)}
              className={`
                w-full
                p-2
                mb-2
                text-left
                border-2
                border-[#7D3C98]
                rounded-lg
                ${moment.id == selectedMomento && "bg-[#7D3C98] text-white"}
                hover:bg-[#7D3C98]
                hover:text-white
                transition-colors
              `}
            >
              {moment.nombre.charAt(0).toUpperCase() + moment.nombre.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">

        {/* chat header */}
        <div className="bg-white p-4 shadow flex justify-between items-center">
          <button
            onClick={() => setShowNewConversation(true)}
            className="bg-[#7D3C98] text-white px-4 py-2 rounded-md hover:bg-blue-900"
          >
            Nueva Conversación
          </button>
          <button
            onClick={() => setShowHistorial(true)}
            className="bg-[#7D3C98] flex items-center space-x-2 text-white px-4 py-2 rounded-md hover:bg-blue-900"
          >
            <History className="w-5 h-5" />
            <span>Historial</span>
          </button>
        </div>

        {/* chat messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message, index) => (
            <div key={index} className="mb-4 p-4 rounded-lg bg-white shadow">
              <div className="font-medium text-[#7D3C98] mb-2">{message.title}</div>
              <p>{message.content}</p>
              <div className="flex space-x-2 mt-2">
                <button className="text-[#7D3C98] hover:text-purple-800">
                  <CircleChevronDown className="w-5 h-5" />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <CircleChevronUp className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

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