import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import LeagueNav from "../../components/NavBar/LeagueNav"

import { getLeagueUsers, getLeagueRosters } from "../../services/sleeper-api"

const LeagueRosters = () => {
  const { leagueId } = useParams()
  const [users, setUsers] = useState([])
  const [rosters, setRosters] = useState([])

  useEffect(() => {
    const fetchRosterDetails = async () => {
      const usersData = await getLeagueUsers(leagueId)
      const rosterData = await getLeagueRosters(leagueId)
      setUsers(usersData)
      setRosters(rosterData)
      console.log(usersData)
      console.log(rosterData)
    }
    fetchRosterDetails()
  }, [leagueId])

  return (
    <>
      <LeagueNav />

      <ul>
        MEMBERS
        {users.map((user, idx) => 
          <li key={idx}>{user.display_name}</li>
        )}
      </ul>
      <ul>
        Rosters
        {rosters.map((roster, idx) =>
        <>
          <li key={idx}>{roster.players.map((player, pidx) =>
            <p key={pidx}>{player}</p>
          )}</li>
        </>
        )}
      </ul>
    </>
  )
}

export default LeagueRosters