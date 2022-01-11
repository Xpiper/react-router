import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }

    return (
        <nav>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
        </nav>
    )
}
