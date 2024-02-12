import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password))
    };

    return (
        <form>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit" onClick={handleSubmit} >Login</button>
        </form>
    );
}

export default Login;
