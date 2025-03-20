import Swal from 'sweetalert2'

// Data
const contactEmail = "test@gmail.com"


export function recoverPasswordAlert() {
  Swal.fire({
    title: 'Cambiar o Recuperar Contraseña',
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
}