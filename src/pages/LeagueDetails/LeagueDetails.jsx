import { useState, useEffect } from "react"
import { useParams, NavLink } from "react-router-dom"

import { getLeague, getLeagueUsers } from "../../services/sleeper-api"

const LeagueDetails = () => {
  const [league, setLeague] = useState({})
  const [users, setUsers] = useState([])
  const { leagueId } = useParams()

  useEffect(() => {
    const fetchLeagueDetails = async () => {
      const leagueData = await getLeague(leagueId)
      const usersData = await getLeagueUsers(leagueId)
      setLeague(leagueData)
      setUsers(usersData)
      console.log(usersData)
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
        <p>SEASON: {league.season}</p>
        <p>TEAMS: {league.total_rosters}</p>
        <p>STATUS: {league.status}</p>

        <ul >
          MEMBERS
          {users.map((user, idx) => 
            <li key={idx}>{user.display_name}</li>
          )}
        </ul>
      </main>
    </>
  )
}

export default LeagueDetails