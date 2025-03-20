
// Libs
import { useEffect, useState } from "react"
import { getUserData } from "../api/auth"

// Zustand
import { useChatStore } from "../../stores/chat-store"
import { useAuthStore } from '../../stores/auth'

// Components
import ButtonClose from "./ButtonClose"


const HistoryComponent = () => {

  // Zustand store
  const token = useAuthStore(state => state.token)
  const deleteToken = useAuthStore(state => state.deleteToken)

  const toggleProfile = useChatStore(state => state.toggleProfile)
  const showProfile = useChatStore(state => state.showProfile)

  // States
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userIsStaff, setUserIsStaff] = useState(false)


  // Effects

  useEffect(() => {

    async function loadUserData() {
      const usersData = await getUserData(token, deleteToken)
      const userData = usersData[0]
      setUserEmail(userData.username)
      setUserName(userData.first_name)
      setUserLastName(userData.last_name)
      setUserIsStaff(userData.is_staff)
    }
    loadUserData()
  }, [])

  return (
    <div
      className={`
        w-[300px]
        bg-white
        h-auto
        px-6
        py-8
        fixed
        top-0
        duration-300
        ${showProfile ? 'right-0' : '-right-96'}
        shadow-2xl
      `}>

      <div className="flex justify-between items-center mb-4">

        {/* Header */}
        <h2 className="text-xl font-bold">Perfil</h2>
        
        <ButtonClose 
          onClick={() => toggleProfile()}
        />
      </div>

      {/* History items */}
      <div
        className={`
          history-entries
          flex
          flex-col
          gap-2
          items-start
          justify-start
          w-full
          h-auto
          overflow-y-scroll
          pr-2
        `}
      >
        <div
          className={`
            user-data
            flex
            items-start
            justify-start
            flex-col
            gap-2
            text-lg
          `}
        >
          <p>
            <strong>Nombre: </strong>
            {userName}
          </p>
          <p>
            <strong>Apellido: </strong>
            {userLastName}
          </p>
          <p>
            <strong>Email: </strong>
            {userEmail}
          </p>
        </div>
      </div>
    </div>
  )
}
export default HistoryComponent