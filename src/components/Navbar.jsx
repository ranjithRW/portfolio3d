import React from 'react'
import { NavLink } from 'react-router-dom'
import { portlogo } from '../assets/images'
const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to="/">
                <img src={portlogo} alt="Logo" className="w-16 h-16 object-contain" />
            </NavLink>
            <nav className='flex gap-7 text-lg font-medium'>
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>About</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>Projects</NavLink>
            </nav>
        </header>
    )
}

export default Navbar