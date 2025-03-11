import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import Players from './pages/Players/Players'

import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/players' element={<Players />} />
        </Routes>
      </main>
    </>
  )
}

export default App
