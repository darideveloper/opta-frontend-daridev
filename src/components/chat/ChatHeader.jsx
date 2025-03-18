// Icons
import { History, Menu, User } from "lucide-react"

// Libs
import { useChatStore } from "../../../stores/chat-store"
import Swal from 'sweetalert2'

// Components
import Button from "../Button"


export default function ChatHeader() {
  
  // Zustand store
  const toggleHistory = useChatStore(state => state.toggleHistory)
  const toggleNav = useChatStore(state => state.toggleNav)
  const toggleProfile = useChatStore(state => state.toggleProfile)
  const resetHistory = useChatStore(state => state.resetHistory)
  
  return (
    <div className={`
      bg-white
        px-4
        py-8
        shadow
        flex
        flex-wrap sm:flex-row
        justify-center md:justify-between
        items-center
        gap-2 md:gap-4
      `}>

      <Button
        onClick={() => toggleNav()}
        isActive={true}
        className={`
          md:hidden
          !w-auto
        `}
      >
        <Menu className="w-5 h-5" />
      </Button>

      <Button
        onClick={() => {
          Swal.fire({
            title: 'Atención',
            text: '¿Estás seguro de querer reiniciar la conversión? El historial se borrará.',
            icon: 'warning',
            confirmButtonText: 'Cancelar',
            showDenyButton: true,
            denyButtonText: 'Reiniciar y borrar historial',
          }).then((result) => {
            if (result.isDenied) {
              resetHistory()
              window.location.reload()
            }
          })
        }}
        isActive={true}
        className={`
          !w-auto
        `}
      >
        Nueva Conversación
      </Button>

      <div
        className={`
          flex
          justify-center
          items-center
          gap-4
        `}
      >
        <Button
          onClick={() => toggleHistory()}
          isActive={true}
          className={`
            flex
            items-center
            gap-2
            !w-auto
          `}
        >
          {/* Icon */}
          <History className="w-5 h-5" />

          {/* Text */}
          <span>Historial</span>
        </Button>

        <Button
          onClick={() => toggleProfile()}
          isActive={true}
          className={`
            flex
            items-center
            gap-2
            !w-auto
          `}
        >
          {/* Icon */}
          <User className="w-5 h-5" />

          {/* Text */}
          <span>Perfil</span>
        </Button>
      </div>
    </div>
  )
}