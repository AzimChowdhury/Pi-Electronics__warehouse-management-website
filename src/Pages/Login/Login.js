import React, { useState } from 'react';
// const axios = require('axios').default;
import axios from 'axios';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import gLogo from '../../Image/g-icon.png';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //sign in with email & pass
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    // sign in with google 
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    //password reset
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
    );



    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    if (user1 || user) {
        // provide jwt token 
        const provideToken = async (email) => {
            const { data } = await axios.post('https://pi-electronics-2244.herokuapp.com/login', { email });
            // console.log(data.token)
            localStorage.setItem('jwt-token', data.token)
        }
        provideToken(email);
        navigate(from, { replace: true })
    }

    if (loading || loading1 || sending) {
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
                {error1 ? <p className='text-danger'>{error1.message}</p> : ''}
                {error2 ? <p className='text-danger'>{error2.message}</p> : ''}


                <p >Forgotten your password ? <button className='btn text-primary'
                    onClick={async () => {
                        await sendPasswordResetEmail(email)
                            .then(() => toast(" email sent !"))
                    }}
                >
                    Reset now </button> </p>

                <small className=''>New in pi-electronics ?<Link to='/register'><span> Register Now</span></Link> </small>
                <button onClick={() => signInWithEmailAndPassword(email, password)} type="submit" className="btn btn-dark mt-3 w-100">Log In</button>
            </form>
            <div className='d-flex  mt-2'>
                <div style={{ height: '0px' }} className='border w-50 mt-3'></div>
                <small className='mt-1 mx-2'>or</small>
                <div style={{ height: '0px' }} className='border w-50 mt-3'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='btn btn-dark mt-3 w-100'>
                <img style={{ width: '25px' }} className='img-fluid me-2' src={gLogo} alt="Google logo icon" />
                Sign in with Google
            </button>
            <ToastContainer
                position="top-center"
                autoClose={6000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Login;
