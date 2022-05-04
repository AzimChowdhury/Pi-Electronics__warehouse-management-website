import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return (
            <div class="spinner-border " role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        )
    }
    if (!user) {
        return <Navigate to='/logIn' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;