import { Files } from "lucide-react"


/**
 * Document icon with link
 * 
 * @param {Object} props - Component props
 * @param {string} props.documentoUrl - Document URL from dashboard
 * @param {string} props.documentoNombre - Document name from dashboard
 * @returns {JSX.Element} Document icon with link
 */
export default function Document({ documentoUrl, documentoNombre }) {

  {/* Get document data */ }
  // const documentoUrl = documento.archivo
  // const documentoNombre = documento.nombre
  const fileExt = documentoUrl ? documentoUrl.split('.').pop() : null

  {/* render document */ }
  return (
    <div>
      <a
        href={documentoUrl}
        target="_blank"
        className={`
          flex
          items-center
          justify-center
          flex-col
          w-36
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
          .{fileExt && fileExt.toUpperCase()}
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