import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='navbar'>
            <h2>Live Más Adoptions</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/pets'>Pets</Link>
                <Link to='/volunteers'>Volunteer</Link>
            </div>
        </nav>
    )
}

export default Nav