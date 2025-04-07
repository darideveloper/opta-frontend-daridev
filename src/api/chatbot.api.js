import { getDataApi } from './base'
const apiProject = "demo"


/**
 * Get chatbot tipo lead from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {function} deleteToken - delete token function from zustand
 * @returns {Object} api json data
 */
export async function getTipoLead (token, deleteToken) {
  return getDataApi(token, deleteToken, `${apiProject}/tipolead/`)
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
  return getDataApi(token, deleteToken, `${apiProject}/programa/?tipo_lead_id=${tipoleadId}`)
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
  return getDataApi(token, deleteToken, `${apiProject}/momento/?programa_id=${programaId}`)
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
  return getDataApi(token, deleteToken, `${apiProject}/submomento/?momento_id=${momentoId}`)
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
  return getDataApi(token, deleteToken, `${apiProject}/respuesta/?submomento_id=${subMomento}`)  
}

/**
 * Get chatbot documentos from api
 * 
 * @param {string} token - user auth token from zustand
 * @param {string} tags - tags
 * @returns {Object} api json data
 */
export const getDocumentos = (token, deleteToken, tags) => {
  return getDataApi(token, deleteToken, `${apiProject}/documento/?tags=${tags}`)  
}