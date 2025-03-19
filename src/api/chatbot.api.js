// Libs
import axios from 'axios'

// constants
const endpoint = `${import.meta.env.VITE_API_HOST}`

/**
 * Get chatbot tipo lead from api
 * 
 * @param {string} token - user auth token from zustand
 * @returns {Promise} axios promise
 */
export const getTipoLead = (token) => {
  return axios.get(`${endpoint}/tipolead/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}

/**
 * Get chatbot programa from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {number} tipoleadId - tipo lead id
 * @returns {Promise} axios promise
 */
export const getPrograma = (token, tipoleadId) => {
  return axios.get(`${endpoint}/programa/?tipo_lead_id=${tipoleadId}`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}


/**
 * Get chatbot momento from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {number} programaId - programa id
 * @returns {Promise} axios promise
 */
export const getMomento = (token, programaId) => {
  return axios.get(`${endpoint}/momento/?programa_id=${programaId}`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}

/**
 * Get chatbot submomento from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {number} momentoId - momento id
 * @returns {Promise} axios promise
 */
export const getSubmomento = (token, momentoId) => {
  return axios.get(`${endpoint}/submomento/?momento_id=${momentoId}`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}

/**
 * Get chatbot respuesta from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {number} subMomento - submomento id
 * @returns {Promise} axios promise
 */
export const getRespuesta = (token, subMomento) => {
  return axios.get(`${endpoint}/respuesta/?submomento_id=${subMomento}`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}

/**
 * Get chatbot respuesta from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {string} tags - tags
 * @returns {Promise} axios promise
 */
export const getdocumentos = (token, tags) => {
  return axios.get(`${endpoint}/documento/?tags=${tags}`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}