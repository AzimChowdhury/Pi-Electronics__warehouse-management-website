import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
import { signOut } from 'firebase/auth';

function Header() {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
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
                            {
                                user ?
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/add'>Add Products</Link>
                                    </li>
                                    :
                                    ''
                            }
                            <li className="nav-item">
                                <Link className="nav-link" to='/inventory'>Inventory</Link>
                            </li>
                            {
                                user ?
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/myItems'>My Items</Link>
                                    </li>
                                    :
                                    ''
                            }
                            <li className="nav-item">
                                {
                                    user ?
                                        <button className='nav-link btn' onClick={logout} > Log Out</button>
                                        :
                                        <Link className="nav-link" to='/login'>Login</Link>
                                }
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/register'>Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header;
