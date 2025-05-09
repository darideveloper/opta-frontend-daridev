// Icons
import { CircleChevronDown } from "lucide-react"

// Libs
import { useState, useEffect } from "react"
import remarkGfm from 'remark-gfm'

// Components
import Document from "./Document"
import ReactMarkdown from 'react-markdown'


/**
 * StepsCard component (render a list of steps with "more" button)
 * 
 * @param {Object} props - Component props
 * @param {Array} props.steps - List of steps
 * @param {string} props.steps[].title - Step title
 * @param {string} props.steps[].content - Step content
 * @param {string} props.steps[].image - Step image
 * @returns {JSX.Element} - StepsCard component
 */
export default function StepsCards({ steps }) {

  const [visibleSteps, setVisibleSteps] = useState(1)

  const visibleStepsList = steps.slice(0, visibleSteps)

  useEffect(() => {
    setTimeout(() => {
      // Add target blank to all markdown links
      const links = document.querySelectorAll('.markdown a')
      links.forEach(link => {
        link.setAttribute('target', '_blank')
      })
    }, 500)
  }, [steps, visibleSteps])

  return (
    <>
      {
        visibleStepsList.map(({ title, content, image, documentos }, index) => {

          const isLastStep = index === visibleStepsList.length - 1
          const moreSteps = steps.length - visibleSteps
          const btnEnable = moreSteps > 0 && isLastStep

          return (
            <div key={index}>
              <div className="mb-4 p-4 rounded-lg bg-white shadow">

                {/* Title */}
                <div className="font-medium text-purple mb-2">{title}</div>

                {/* Main markdown text */}
                <div
                  className={`
                    markdown
                  `}
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    children={content}
                  />
                </div>

                {
                  image 
                  &&
                  <img 
                    className={`
                      rounded-md
                      max-w-full
                      w-[800px]
                      my-12
                      shadow-lg
                    `}
                    src={image}
                  />
                }

                {/* Next button */}
                <div className="flex space-x-2 mt-2">
                  <button
                    className={`
                      text-purple 
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