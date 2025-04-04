import { useState, useEffect } from "react"
import { useParams, NavLink } from "react-router-dom"

import LeagueNav from "../../components/NavBar/LeagueNav"

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
      <LeagueNav leagueId={leagueId} />
      <main>
        <h1>Details</h1>
        <div className="league-bio">
          <img src={`https://sleepercdn.com/avatars/thumbs/${league.avatar}`} alt="" />
          <p>{league.name}</p>
          <p>SEASON: {league.season}</p>
          <p>TEAMS: {league.total_rosters}</p>
          <p>STATUS: {league.status}</p>
        </div>

        
      </main>
    </>
  )
}

export default LeagueDetails