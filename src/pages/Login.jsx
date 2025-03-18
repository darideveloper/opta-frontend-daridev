// Libs
import { useState } from 'react'

// Components
import Input from '../components/Input'
import Button from '../components/Button'

// Media
import logo from "../assets/logo.webp"


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div
      className={`
        w-screen
        h-screen
        flex
        items-center
        justify-center
        bg-white
      `}
    >
      <form
        className={`
          flex
          flex-col
          w-full
          gap-4
          bg-white
          rounded-md
          shadow-md
          container
          mx-auto
          p-6
          max-w-lg
        `}
      >
        <img 
          src={logo}
          alt="Logo"
          className={`
            w-full
            max-w-xs
            mx-auto          
          `}
        />

        <Input 
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="on"
        />
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="on"
        />
        <Button
          type="select"
          isActive={true}
          onClick={() => console.log('Iniciar Sesión')}
          className={`
            mt-4
            w-full
            text-center
          `}
        >
          Iniciar Sesión
        </Button>
      </form>
    </div>
  )
}