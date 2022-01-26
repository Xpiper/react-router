import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }

    const auth = useAuth();

    return (
        <nav className='primary-nav'>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
            <NavLink style={navLinkStyles} to='/products'>Produts</NavLink>
            <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>
            {
                !auth.user && (
                    <NavLink style={navLinkStyles} to='/login'>login</NavLink>
                )
            }
        </nav>
    )
}
