import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

import { getAllLeagues } from '../../services/sleeper-api'

const Leagues = (props) => {

  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    const fetchLeagues = async () => {
      const leagueData = await getAllLeagues(props.user.user_id)
      setLeagues(leagueData)
    }
    fetchLeagues()
  }, [props.user])

  return (
    <>
      <h1>Leagues</h1>
      <ul>
        {leagues.map((league, idx) => 
          <NavLink key={idx} to={`/leagues/${league.league_id}`}>{league.name}</NavLink>
        )}
      </ul>
    </>
  )
}

export default Leagues