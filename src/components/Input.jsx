
/**
 * Componente Input
 * @param {Object} props - Propiedades del componente
 * @param {String} props.type - Tipo de input
 * @param {String} props.placeholder - Placeholder del input
 * @param {String} props.value - Valor del input
 * @param {Function} props.onChange - Función que se ejecuta al cambiar el valor del input
 * @param {Boolean} props.required - Indica si el input es requerido
 * @param {String} props.className - Clases adicionales del input
 * @param {Object} props.props - Otras propiedades del input
 * @returns {JSX.Element} - Elemento JSX
 */
export default function Input({ type, placeholder, value, onChange, required, className, ...props }) {
  return (
    <input
      type={type}
      className={`
        flex-1
        p-2
        border
        border-gray-300
        rounded-md
        focus:outline-none
        focus:border-purple
        ${className}
      `}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      {...props}
    />
  )
}