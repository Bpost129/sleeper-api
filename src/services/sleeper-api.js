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

export async function getLeagueUsers(leagueId) {
  const res = await fetch(`${baseUrl}/league/${leagueId}/users`)
  return res.json()
}

export async function getLeagueRosters(leagueId) {
  const res = await fetch(`${baseUrl}/league/${leagueId}/rosters`)
  return res.json()
}

export async function getPlayers() {
  const res = await fetch(`${baseUrl}/players/nfl`)
  return res.json()
}

export async function getTransactions(leagueId) {
  const res = await fetch(`${baseUrl}/league/${leagueId}/traded_picks`)
  return res.json()
}