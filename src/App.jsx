import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import Players from './pages/Players/Players'
import User from './pages/User/User'

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
          <Route path='/players' element={<Players />} />
          <Route path='/user' element={<User user={user} setUser={setUser} />} />
        </Routes>
      </main>
    </>
  )
}

export default App
