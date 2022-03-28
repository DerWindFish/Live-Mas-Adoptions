import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='navbar'>
            <h2>Live Más Adoptions</h2>
            <Link to='/'>Home</Link>
        </nav>
    )
}

export default Nav