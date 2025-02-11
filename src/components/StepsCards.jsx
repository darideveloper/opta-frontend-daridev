// Icons
import { CircleChevronDown } from "lucide-react"

/**
 * StepsCard component (render a list of steps with "more" button)
 * 
 * @param {Object} props - Component props
 * @param {Array} props.steps - List of steps
 * @param {string} props.steps[].title - Step title
 * @param {string} props.steps[].content - Step content
 */
export default function StepsCards({ steps }) {

  return (
    <>
      {
        steps.map(({ title, content }, index) => (
          <div key={index} className="mb-4 p-4 rounded-lg bg-white shadow">
            <div className="font-medium text-[#7D3C98] mb-2">{title}</div>
            <p>{content}</p>
            <div className="flex space-x-2 mt-2">
              <button className="text-[#7D3C98] hover:text-purple-800">
                <CircleChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))
      }
    </>
  )
}