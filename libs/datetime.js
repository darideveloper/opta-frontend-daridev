/**
 * Get as string the current date and time in the format "dd/mm hh:mm:ss".
 * @returns {string} The formatted date and time.
 */
export function getFormattedDateTime() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${day}/${month} ${hours}:${minutes}:${seconds}`;
}