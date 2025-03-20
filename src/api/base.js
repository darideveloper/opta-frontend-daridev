// constants
export const apiBase = `${import.meta.env.VITE_API_HOST}`

/**
 * Get chatbot tipo lead from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {function} deleteToken - delete token function from zustand
 * @param {string} endpoint - api apiBase
 * @returns {Object} api json data
 */
export async function getDataApi(token, deleteToken, endpoint) {
    // Get data from api
    const response = await fetch(`${apiBase}/${endpoint}`, {
      "method": "GET",
      headers: {
        Authorization: `Token ${token}`
      }
    })
  
    // Validate response status
    if (response.status !== 200) {
      deleteToken()
    }
  
    const jsonData = await response.json()
    return jsonData
}