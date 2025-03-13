const baseUrl = 'https://api.sleeper.app/v1'

export async function getUser(username) {
  const res = await fetch(`${baseUrl}/user/${username}`)
  return res.json()
}

export async function getAllLeagues(userId) {
  const res = await fetch(`${baseUrl}/user/${userId}/leagues/nfl/2024`)
  return res.json()
}

// ${new Date().getFullYear()}