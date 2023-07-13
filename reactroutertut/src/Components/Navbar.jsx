import { Link } from 'react-router-dom'

const Navbar = () => {
const navLinkStyles = () => {

}


  return (
    <nav>
      <NavLink style={navLinkStyles} to="/">Home</NavLink>
      <NavLink style={navLinkStyles} to="/about">about</NavLink>
    </nav>
  )
}

export default Navbar
