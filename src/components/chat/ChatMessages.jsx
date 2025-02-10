// Icons
import { CircleChevronDown } from "lucide-react"

/**
 * ChatMessages component
 * 
 * @param {Object} props - Component props
 * @param {Array} props.messages - Array of messages
 * @param {String} props.messages[].title - Message title
 * @param {String} props.messages[].content - Message content
 * @returns {JSX.Element}
 */
export default function ChatMessages({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
    {messages.map((message, index) => (
      <div key={index} className="mb-4 p-4 rounded-lg bg-white shadow">
        <div className="font-medium text-[#7D3C98] mb-2">{message.title}</div>
        <p>{message.content}</p>
        <div className="flex space-x-2 mt-2">
          <button className="text-[#7D3C98] hover:text-purple-800">
            <CircleChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    ))}
    </div>
  )
}
