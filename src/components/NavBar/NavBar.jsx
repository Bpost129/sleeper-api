import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <main id='navbar'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/user'>User</NavLink>
      <NavLink to='/players'>Players</NavLink>
    </main>
  )
}

export default NavBar