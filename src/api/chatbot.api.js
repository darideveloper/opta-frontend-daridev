import axios from 'axios'
export const getTipoLead = () => {
    return axios.get(`${import.meta.env.VITE_API_HOST}/tipolead/`)
}

export const getPrograma = (tipoleadId) => {
    return axios.get(`${import.meta.env.VITE_API_HOST}/programa/?tipo_lead_id=${tipoleadId}`)
}

export const getMomento = () => {
    return axios.get(`${import.meta.env.VITE_API_HOST}/momento/`)
}

export const getSubmomento = () => {
    return axios.get(`${import.meta.env.VITE_API_HOST}/submomento/`)
}
export const getRespuesta = () => {
    return axios.get(`${import.meta.env.VITE_API_HOST}/respuesta/`)
}
export const getdocumento = () => {
    return axios.get(`${import.meta.env.VITE_API_HOST}/documento/`)
}