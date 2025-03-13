const baseUrl = 'https://api.sleeper.app/v1'

export async function getUser(username) {
  const res = await fetch(`${baseUrl}/user/${username}`)
  return res.json()
}

export async function getAllLeagues(userId) {
  const res = await fetch(`${baseUrl}/user/${userId}/leagues/nfl/${new Date().getFullYear()}`)
  return res.json()
}

export async function getLeague(leagueId) {
  const res = await fetch(`${baseUrl}/league/${leagueId}`)
  return res.json()
}