import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    //send email verification
    const [sendEmailVerification, sending, error2] = useSendEmailVerification(
        auth
    );


    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(email, password)
        sendEmailVerification()
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true })
    }
    if (loading || sending) {
        return (
            <div style={{ width: '20px' }} className='mt-5 mx-auto'>
                <div className='spinner-border' role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }


    return (
        <form style={{ width: '400px' }} className=' mx-auto border p-2 m-3'>
            <h4 className='text-center'>Please Register</h4>
            <div className="form-group mb-3">
                <label>Email address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" Email" />

            </div>
            <div className="form-group">
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            {
                error ? <p className='text-danger'>{error.message}</p> : ''
            }
            {error2 ? <p className='text-danger'>{error2.message}</p> : ''}
            <p className='mt-3'>Already have an account ?<Link to='/login'> <span>Log In</span></Link></p>
            <button onClick={() => createNewUser(email, password)} type="submit" className="btn btn-dark mt-4 w-100">Register</button>
        </form>
    )
}

export default Register;
