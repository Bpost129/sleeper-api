import { useParams, NavLink } from "react-router-dom"


const LeagueNav = () => {
  const { leagueId } = useParams()

  return (
    <div className="league-nav">
      <NavLink to={`/leagues/${leagueId}/rosters`}>Rosters</NavLink>
      <NavLink>League Nav</NavLink>
      <NavLink>League Nav</NavLink>
    </div>
  )
}

export default LeagueNav