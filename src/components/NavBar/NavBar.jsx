import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <main id='navbar'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/user'>User</NavLink>
      <NavLink to='/leagues'>Leagues</NavLink>
    </main>
  )
}

export default NavBar