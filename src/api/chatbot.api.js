// Libs
import axios from 'axios'

// constants
const apiBase = `${import.meta.env.VITE_API_HOST}`

/**
 * Get chatbot tipo lead from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {function} deleteToken - delete token function from zustand
 * @param {string} endpoint - api apiBase
 * @returns {Object} api json data
 */
async function getDataApi(token, deleteToken, endpoint) {
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

/**
 * Get chatbot tipo lead from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {function} deleteToken - delete token function from zustand
 * @returns {Object} api json data
 */
export async function getTipoLead (token, deleteToken) {
  return getDataApi(token, deleteToken, 'tipolead/')
}

/**
 * Get chatbot programa from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {number} tipoleadId - tipo lead id
 * @param {function} deleteToken - delete token function from zustand
 * @returns {Object} api json data
 */
export async function getPrograma (token, deleteToken, tipoleadId) {
  return getDataApi(token, deleteToken, `programa/?tipo_lead_id=${tipoleadId}`)
}


/**
 * Get chatbot momento from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {number} programaId - programa id
 * @param {function} deleteToken - delete token function from zustand
 * @returns {Object} api json data
 */
export const getMomento = (token, deleteToken, programaId) => {
  return getDataApi(token, deleteToken, `momento/?programa_id=${programaId}`)
}

/**
 * Get chatbot submomento from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {number} momentoId - momento id
 * @param {function} deleteToken - delete token function from zustand
 * @returns {Object} api json data
 */
export const getSubmomento = (token, deleteToken, momentoId) => {
  return getDataApi(token, deleteToken, `submomento/?momento_id=${momentoId}`)
}

/**
 * Get chatbot respuesta from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {number} subMomento - submomento id
 * @param {function} deleteToken - delete token function from zustand
 * @returns {Object} api json data
 */
export const getRespuesta = (token, deleteToken, subMomento) => {
  return getDataApi(token, deleteToken, `respuesta/?submomento_id=${subMomento}`)  
}

/**
 * Get chatbot documentos from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {string} tags - tags
 * @returns {Object} api json data
 */
export const getDocumentos = (token, deleteToken, tags) => {
  return getDataApi(token, deleteToken, `documento/?tags=${tags}`)  
}