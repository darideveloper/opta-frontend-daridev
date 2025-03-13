// Icons
import { SquareX } from 'lucide-react'

// Components
import Button from "./Button"

/**
 * ButtonClose component
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onClick - Click event handler
 * @param {String} props.className - Button custom classes
 */
export default function ButtonClose({ onClick, className }) {
  return (
    <Button
      onClick={() => onClick()}
      className={`
        border-none
        !p-0
        w-auto
        !bg-transparent
        md:hidden
        ${className}
      `}
      isActive={true}
    >
      <SquareX
        className={`
          w-10
          h-10
          text-purple
        `}
      />
    </Button>
  )
}