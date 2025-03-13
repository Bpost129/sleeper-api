// import { useState, useEffect } from "react"

import { getUser } from '../../services/sleeper-api'

const User = ({ user, setUser }) => {
  
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
          <p>Avatar: {user.avatar}</p>
          <img src={`https://sleepercdn.com/avatars/thumbs/${user.avatar}`} alt="" />
        </div>
      }
    </>
  )
}

export default User