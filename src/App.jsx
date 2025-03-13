import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import Leagues from './pages/Leagues/Leagues'
import User from './pages/User/User'

import { getAllLeagues } from './services/sleeper-api'

import './App.css'

function App() {
  const [user, setUser] = useState({
    username: "",
    user_id: "",
    display_name: "",
    avatar: ""
  })
  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    const fetchLeagues = async () => {
      const leagueData = await getAllLeagues(user.user_id)
      setLeagues(leagueData)
    }
    fetchLeagues()
  }, [user])

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/user' element={<User user={user} setUser={setUser} />} />
          <Route path='/leagues' element={<Leagues user={user} leagues={leagues} />} />
        </Routes>
      </main>
    </>
  )
}

export default App
