/**
 * LinkButton component (button with link style)
 * @param {Object} props - Component props
 * @param {Function} props.onClick - Click event handler
 * @param {string} props.children - Button text or content
 * @param {string} props.className - Additional classes
 * @returns {React.Component} - LinkButton component
 */
export default function LinkButton({ onClick, children, className }) {
  return (
    <button
      className={`
        text-purple
        hover:underline
        ${className}
      `}
      onClick={() => onClick()}
      type="button"
    >
      {children}
    </button>
  )
}