import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

export const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logout();
        navigate("/")
    }
    return <div>
        welcome {auth.user}
        <button onClick={handleLogout}>logout</button>
    </div>;
};
