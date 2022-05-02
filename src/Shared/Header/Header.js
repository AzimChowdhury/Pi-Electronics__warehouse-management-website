import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2 ps-lg-5 ms-lg-5" to='/home'>PI Electronics</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbar-left">
                            <li className="nav-item">
                                <Link className="nav-link " to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/add'>Add Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/inventory'>Inventory</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/login'>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header;
