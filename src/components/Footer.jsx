export default function Footer() {
  return (
    <footer>
      <small
        className={`
          flex
          justify-center
          items-center
          flex-col sm:flex-row
          bg-[#7D3C98]
          text-white
          gap-0 sm:gap-6
          py-2
        `}
      >
        <span>
          OPTA es de PRAXIA
        </span>
        <span>
          &copy; 2025 OPTA - Todos los derechos reservados
        </span>
      </small>
    </footer>
  )
}