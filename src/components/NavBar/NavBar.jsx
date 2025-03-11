import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/players'>Players</NavLink>
    </>
  )
}

export default NavBar