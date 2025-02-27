import axios from 'axios'

const endpoint = `${import.meta.env.VITE_API_HOST}`

export const getTipoLead = () => {
  return axios.get(`${endpoint}/tipolead/`)
}

export const getPrograma = (tipoleadId) => {
  return axios.get(`${endpoint}/programa/?tipo_lead_id=${tipoleadId}`)
}

export const getMomento = (programaId) => {
  return axios.get(`${endpoint}/momento/?programa_id=${programaId}`)
}

export const getSubmomento = (momentoId) => {
  return axios.get(`${endpoint}/submomento/?momento_id=${momentoId}`)
}
export const getRespuesta = (subMomento) => {
  return axios.get(`${endpoint}/respuesta/?submomento_id=${subMomento}`)
}
export const getdocumentos = (tags) => {
  return axios.get(`${endpoint}/documento/?tags=${tags}`)
}