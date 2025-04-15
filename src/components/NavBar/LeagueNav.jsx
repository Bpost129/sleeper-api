import { useParams, NavLink } from "react-router-dom"


const LeagueNav = () => {
  const { leagueId } = useParams()

  return (
    <div className="league-nav">
      <NavLink to={`/leagues/${leagueId}/rosters`}>Rosters</NavLink>
      <NavLink>Free Agents</NavLink>
      <NavLink to={`/leagues/${leagueId}/transactions`}>Transactions</NavLink>
    </div>
  )
}

export default LeagueNav