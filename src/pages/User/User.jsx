import { useState, useEffect } from "react"

import { getUser } from '../../services/sleeper-api'

const User = () => {
  const [user, setUser] = useState({
    username: "",
    user_id: "",
    display_name: "",
    avatar: ""
  })
  
  const fetchUser = async (username) => {
    const userData = await getUser(username)
    setUser(userData)
  }
  

  const handleChange = (e) => {
    setUser({...user, username: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchUser(user.username)
  }
  

  return (
    <>
      <h1>Enter Username</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={user.username} onChange={handleChange} />
        <button type="submit" >Submit</button>
      </form>
      {user && 
        <div>
          <p>Username: {user.username}</p>
          <p>Display Name: {user.display_name}</p>
          <p>User ID: {user.user_id}</p>
        </div>
      }
    </>
  )
}

export default User