const endpoint = `${import.meta.env.VITE_API_HOST}`

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
    response = await fetch(`${endpoint}/login/`, {
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