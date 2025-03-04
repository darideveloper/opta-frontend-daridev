export default function Button ({onClick, isActive = false, children}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        p-2
        mb-2
        text-left
        border-2
        border-[#7D3C98]
        rounded-lg
        ${isActive && "bg-[#7D3C98] text-white"}
        hover:bg-[#7D3C98]
        hover:text-white
        transition-colors
        capitalize
      `}
    >
      {children}
    </button>
  )
}