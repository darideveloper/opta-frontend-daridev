// Icons
import { CircleChevronDown, Files } from "lucide-react"

// Libs
import { useState } from "react"

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
        visibleStepsList.map(({ title, content, documentoUrl, documentoNombre }, index) => {

          const isLastStep = index === visibleStepsList.length - 1
          const moreSteps = steps.length - visibleSteps
          const btnEnable = moreSteps > 0 && isLastStep
          const fileExt = documentoUrl ? documentoUrl.split('.').pop() : null

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

              {/* Icon */}
              {
                fileExt && (
                  <div>
                    <a
                      href={documentoUrl}
                      target="_blank"
                      className={`
                        flex
                        items-center
                        justify-center
                        flex-col
                        w-28
                        duration-300
                        hover:opacity-70
                        hover:-translate-y-1
                      `}
                    >
                      {/* File ext */}
                      <span
                        className={`
                          font-bold
                          text-[#7D3C98]
                        `}
                      >
                        .{fileExt.toUpperCase()}
                      </span>

                      {/* File icon */}
                      <Files
                        className={`
                          icon
                          w-14 h-14
                          inline-block
                          stroke-[#7D3C98]
                        `}
                      />

                      {/* File name */}
                      <span
                        className={`
                          inline-block
                          text-wrap
                          w-full
                          text-center
                          
                        `}
                      >
                        {documentoNombre}
                      </span>
                    </a>
                  </div>
                )
              }
            </div>
          )
        })
      }
    </>
  )
}