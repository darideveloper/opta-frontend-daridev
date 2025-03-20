import { getDataApi, apiBase } from './base'


/**
 *
 * Login with user and password and return token 
 *
 * @param {string} username - The user email.
 * @param {string} password - The user password.
 */
export async function login(username, password) {

  const jsonData = {
    username: username,
    password: password
  }

  let response
  let jsonResponse
  try {
    response = await fetch(`${apiBase}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData)
    })
    jsonResponse = await response.json()
  } catch (error) {
    return ""
  }
  return jsonResponse.token
}


/**
 * Get user dfata api
 * 
 * @param {string} token - user auth token from zustand
 * @param {function} deleteToken - delete token function from zustand
 * @returns {Object} api json data
 */
export async function getUserData (token, deleteToken) {
  return getDataApi(token, deleteToken, 'user/')
}
