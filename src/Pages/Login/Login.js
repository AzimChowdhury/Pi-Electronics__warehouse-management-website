import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import gLogo from '../../Image/g-icon.png';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        return <p>user signed in</p>
    }
    if (error) {
        console.dir(error)
    }
    if (loading) {
        return (
            <div style={{ width: '20px' }} className='mt-5 mx-auto'>
                <div className='spinner-border' role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div style={{ width: '400px' }} className=' mx-auto border p-2 m-3'>
            <form>
                <h4 className='text-center'>Please Login</h4>
                <div className="form-group mb-3">
                    <label>Email address</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div>

                <div className="form-group mb-3">
                    <label>Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                {error ? <p className='text-danger'>{error.message}</p> : ''}

                <small className='mt-2'>Forgotten your password ? <span>Reset Password ?</span> </small>
                <br />
                <small className='mt-2'>New in Captured Moments ?<Link to='/register'><span> Register Now</span></Link> </small>
                <button onClick={() => signInWithEmailAndPassword(email, password)} type="submit" className="btn btn-dark mt-3 w-100">Log In</button>
            </form>
            <div className='d-flex  mt-2'>
                <div style={{ height: '0px' }} className='border w-50 mt-3'></div>
                <small className='mt-1 mx-2'>or</small>
                <div style={{ height: '0px' }} className='border w-50 mt-3'></div>
            </div>
            <button className='btn btn-dark mt-3 w-100'>
                <img style={{ width: '25px' }} className='img-fluid me-2' src={gLogo} alt="Google logo icon" />
                Sign in with Google
            </button>
        </div>
    )
}

export default Login;
