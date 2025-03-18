// Libs
import { useState } from 'react'
import Swal from 'sweetalert2'

// Components
import Input from '../components/Input'
import Button from '../components/Button'

// Media
import logo from "../assets/logo.webp"


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const contactEmail = "test@gmail.com"

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