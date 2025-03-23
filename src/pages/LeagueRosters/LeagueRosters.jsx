import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import LeagueNav from "../../components/NavBar/LeagueNav"

import { getLeagueUsers } from "../../services/sleeper-api"

const LeagueRosters = () => {
  const { leagueId } = useParams()
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchRosterDetails = async () => {
      const usersData = await getLeagueUsers(leagueId)
      setUsers(usersData)
    }
    fetchRosterDetails()
  }, [leagueId])

  return (
    <>
      <LeagueNav />

      <ul >
          MEMBERS
          {users.map((user, idx) => 
            <li key={idx}>{user.display_name}</li>
          )}
        </ul>
      <p>Rosters</p>
    </>
  )
}

export default LeagueRosters