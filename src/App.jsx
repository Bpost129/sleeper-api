import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import NavBar from './components/NavBar/NavBar'
import User from './pages/User/User'
import Leagues from './pages/Leagues/Leagues'
import LeagueDetails from './pages/LeagueDetails/LeagueDetails'
import LeagueRosters from './pages/LeagueRosters/LeagueRosters'


import './App.css'

function App() {
  const [user, setUser] = useState({
    username: "",
    user_id: "",
    display_name: "",
    avatar: ""
  })
  

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
