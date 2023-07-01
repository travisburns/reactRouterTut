import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

const navLinkStyles = ({ isActive }) => {
    return {
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: isActive ? 'none' : 'underline',
    }
}



  return (
    <nav>
        <NavLink style={nav.LinkStyles} to='/'> Home</NavLink>
        <NavLink style={nav.LinkStyles} to='/about'> About</NavLink>
    </nav>
  )
}

export default Navbar
