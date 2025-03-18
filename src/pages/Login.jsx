// Libs
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { login } from '../api/auth'

// Components
import Input from '../components/Input'
import Button from '../components/Button'

// Media
import logo from "../assets/logo.webp"

// Zustand
import { useAuthStore } from '../../stores/auth'


export default function Login() {

  // Local state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Data
  const contactEmail = "test@gmail.com"

  // Zustand store
  const setToken = useAuthStore(state => state.setToken)


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
        onClick={(e) => e.preventDefault()}
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
          onClick={() => {
            login(email, password).then((token) => {
              if (token) {
                Swal.fire({
                  title: 'Inicio de Sesión Exitoso',
                  icon: 'success',
                  confirmButtonText: 'Continuar',
                }).then(() => {
                  setToken(token)
                })
              } else {
                Swal.fire({
                  title: 'Inicio de Sesión Fallido',
                  icon: 'error',
                  confirmButtonText: 'Reintentar',
                })
              }
            })
          }}
          className={`
            mt-4
            w-full
            text-center
          `}
        >
          Iniciar Sesión
        </Button>

        <button
          className={`
            text-purple
            hover:underline
          `}
          onClick={() => {
            Swal.fire({
              title: 'Recuperar Contraseña',
              html: `
                <p>
                  Contacta a soporte <a href="mailto:${contactEmail}">${contactEmail}</a> para recuperar tu contraseña.
                </p>
              `,
              icon: 'info',
              confirmButtonText: 'Copiar Correo',
              showDenyButton: true,
              denyButtonText: 'Cancelar',
            }).then((result) => {
              if (result.isConfirmed) {
                navigator.clipboard.writeText(contactEmail).then(() => {
                  Swal.fire({
                    title: 'Correo Copiado',
                    icon: 'success',
                    confirmButtonText: 'Regresar',
                  })
                })
              }
            })
          }}
          type="button"
        >
          ¿Olvidaste tu contraseña?
        </button>
      </form>
    </div>
  )
}