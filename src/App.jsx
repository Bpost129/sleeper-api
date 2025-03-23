import { useState, /* useEffect */ } from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import NavBar from './components/NavBar/NavBar'
import User from './pages/User/User'
import Leagues from './pages/Leagues/Leagues'
import LeagueDetails from './pages/LeagueDetails/LeagueDetails'
import LeagueRosters from './pages/LeagueRosters/LeagueRosters'

// import { getPlayers } from './services/sleeper-api'

import './App.css'

function App() {
  const [user, setUser] = useState({
    username: "",
    user_id: "",
    display_name: "",
    avatar: ""
  })
  // const [players, setPlayers] = useState({})
  
  // useEffect(() => {
  //   const fetchPlayers = async () => {
  //     const playerData = await getPlayers()
  //     setPlayers(playerData)
  //     console.log(playerData)
  //   }
  //   fetchPlayers()
  // }, [])

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/user' element={<User user={user} setUser={setUser} />} />
          <Route path='/leagues' element={<Leagues user={user} />} />
          <Route path='/leagues/:leagueId' element={<LeagueDetails />} />
          <Route path='/leagues/:leagueId/rosters' element={<LeagueRosters />} />
        </Routes>
      </main>
    </>
  )
}

export default App
