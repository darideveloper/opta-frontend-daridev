import { useState } from 'react';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <input
        type="email"
        placeholder="Correo Electrónico"
        className={``}
      />
      <input
        type="password"
        placeholder="Contraseña"
        className={``}
      />
      <button
        type="submit"
        className={``}
      >
        Iniciar Sesión
      </button>
    </form>
  )
}