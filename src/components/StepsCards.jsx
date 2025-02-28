// Icons
import { CircleChevronDown } from "lucide-react"

// Libs
import { useState } from "react"

// COmponents
import Document from "./Document"

/**
 * StepsCard component (render a list of steps with "more" button)
 * 
 * @param {Object} props - Component props
 * @param {Array} props.steps - List of steps
 * @param {string} props.steps[].title - Step title
 * @param {string} props.steps[].content - Step content
 */
export default function StepsCards({ steps }) {

  const [visibleSteps, setVisibleSteps] = useState(1)

  const visibleStepsList = steps.slice(0, visibleSteps)

  return (
    <>
      {
        visibleStepsList.map(({ title, content, documentos }, index) => {

          const isLastStep = index === visibleStepsList.length - 1
          const moreSteps = steps.length - visibleSteps
          const btnEnable = moreSteps > 0 && isLastStep

          return (
            <div key={index}>
              <div className="mb-4 p-4 rounded-lg bg-white shadow">

                {/* Title */}
                <div className="font-medium text-[#7D3C98] mb-2">{title}</div>

                {/* Main text */}
                <p>{content}</p>

                {/* Next button */}
                <div className="flex space-x-2 mt-2">
                  <button
                    className={`
                      text-[#7D3C98] 
                      hover:text-purple-800
                      ${!btnEnable && 'opacity-50'}
                    `}
                    onClick={() => setVisibleSteps(visibleSteps + 1)}
                    disabled={!btnEnable}
                  >
                    <CircleChevronDown className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Documents */}
              <div
                className={`
                  flex
                  flex-wrap
                  gap-2
                `}
              >
                {
                  documentos.map(documento =>
                    <Document 
                      key={documento.id}
                      documentoUrl={documento.archivo}
                      documentoNombre={documento.nombre}
                    />
                  )
                }
              </div>
            </div>
          )
        })
      }
    </>
  )
}