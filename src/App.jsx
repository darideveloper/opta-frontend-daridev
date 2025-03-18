import Chat from './pages/Chat'
import Login from './pages/Login'

// Zustand
import { useAuthStore } from '../stores/auth'

function App() {

  const token = useAuthStore(state => state.token)

  return (
    <>
      {
        token
          ? <Chat />
          : <Login />
      }
    </>
  )
}

export default App