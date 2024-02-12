import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';

function Navbar(){
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
    }
    const user = useSelector(state => state.username)
    return (
        <nav className="navbar">
            <ul>helle {user}</ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/todo' className="nav-link">Todo</Link>
                </li>
                {/* <li className="nav-item">
                    <Link to='/notification' className="nav-link">Notification</Link>
                </li> */}
            </ul>
            <ul><button onClick={handleLogout}>logout</button></ul>
        </nav>
    );
};

export default Navbar;