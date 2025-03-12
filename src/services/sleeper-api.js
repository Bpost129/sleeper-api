const baseUrl = 'https://api.sleeper.app/v1'

export async function getUser(username) {
  const res = await fetch(`${baseUrl}/user/${username}`)
  return res.json()
}