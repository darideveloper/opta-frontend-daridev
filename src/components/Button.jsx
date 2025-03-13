/**
 * Button component
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onClick - Click event handler
 * @param {Boolean} props.isActive - Button active state. Default is false
 * @param {String} props.type - Button type (small, select). Default is select
 * @param {String} props.children - Button content
 * @param {String} props.className - Button custom classes
 * @returns 
 */
export default function Button({
  onClick,
  isActive = false,
  type = "select",
  children,
  className,
}) {

  const styles = {
    "select": "p-2 rounded-lg w-full",
    "small": "p-1 text-sm rounded-full text-center px-2"
  }

  return (
    <button
      onClick={onClick}
      className={`
        text-left
        border-2
        border-purple
        duration-200
        ${isActive && "bg-purple text-white"}
        ${isActive ? "hover:scale-105 hover:opacity-80" : "hover:bg-purple hover:text-white"}
        capitalize
        ${styles[type]}
        ${className}
      `}
    >
      {children}
    </button>
  )
}