import { useState, useEffect } from "react"
import { useParams, NavLink } from "react-router-dom"

import { getLeague } from "../../services/sleeper-api"

const LeagueDetails = () => {
  const [league, setLeague] = useState({})
  const { leagueId } = useParams()

  useEffect(() => {
    const fetchLeagueDetails = async () => {
      const leagueData = await getLeague(leagueId)
      setLeague(leagueData)
    }
    fetchLeagueDetails()
  }, [leagueId])

  return (
    <>
      <div className="league-nav">
        <NavLink>League Nav</NavLink>
        <NavLink>League Nav</NavLink>
        <NavLink>League Nav</NavLink>
      </div>
      <main>
        <h1>Details</h1>
        <img src={`https://sleepercdn.com/avatars/thumbs/${league.avatar}`} alt="" />
        <p>{league.name}</p>
        <p>Season: {league.season}</p>
        <p>Teams: {league.total_rosters}</p>
        <p>Status: {league.status}</p>
        <p></p>
      </main>
    </>
  )
}

export default LeagueDetails