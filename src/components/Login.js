import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

export const Login = () => {

    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || '';

    const hanldeLogin = () => {
        auth.login(user);
        navigate(redirectPath, { replace: true });
    }

    return <div>
        <label>
            usernmae <input type='text' value={user} onChange={e => setUser(e.target.value)} />
        </label>
        <button onClick={hanldeLogin}>login</button>
    </div>;
};
