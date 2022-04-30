import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <h2>pi electronics</h2>
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/add'>Add Products</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Header;
