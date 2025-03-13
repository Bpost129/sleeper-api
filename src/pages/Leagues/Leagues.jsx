const Leagues = (props) => {
  return (
    <>
      <h1>Leagues</h1>
      <ul>
        {props.leagues.map((league, idx) => 
          <li key={idx}>{league.name}</li>
        )}
      </ul>
    </>
  )
}

export default Leagues