import { useState } from 'react'

/**
 * ChatTextBox component
 * 
 * @param {Object} props - Component props
 * @param {Array} props.dataSubmomentos - Array of submomentos
 * @param {String} props.dataSubmomentos[].id - Submomento ID
 * @param {String} props.dataSubmomentos[].nombre - Submomento name
 * @returns {JSX.Element}
 */
export default function ChatTextBox({ dataSubmomentos }) {

  function handleSendMessage () {
    // TODO: Send message logic
    alert('Mensaje enviado')
  }

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
          className="px-4 py-2 bg-[#7D3C98] text-white rounded-r-md hover:bg-[#7D3C98] uppercase"
          onClick={handleSendMessage}
        >
            Consultar
        </button>
      </div>
    </div>
  )
}