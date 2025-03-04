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
export default function Button ({onClick, isActive = false, type = "select", children, className}) {

  const styles = {
    "select": "p-2 rounded-lg w-full",
    "small": "p-1 text-sm rounded-full text-center px-6"
  }

  return (
    <button
      onClick={onClick}
      className={`
        text-left
        border-2
        border-[#7D3C98]
        ${isActive && "bg-[#7D3C98] text-white"}
        hover:bg-[#7D3C98]
        hover:text-white
        transition-colors
        capitalize
        ${styles[type]}
        ${className}
      `}
    >
      {children}
    </button>
  )
}