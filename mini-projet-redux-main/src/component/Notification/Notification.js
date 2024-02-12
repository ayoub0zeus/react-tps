
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markAsRead } from '../../redux/actions';
import Navbar from '../Navbar/Navbar'
function Notification (){
    const dispatch = useDispatch();
    const notifications = useSelector((state) => state.notifications);

    const handleNotificationClick = (id) => {
        dispatch(markAsRead(id));
    };

    return (
        <div>
            <Navbar />
            <h2>Notifications</h2>
            <ul>
                {notifications.map((notification) => (
                    <li
                        key={notification.id}
                        style={{ backgroundColor: notification.isRead ? 'red' : 'white' }}
                        onClick={() => handleNotificationClick(notification.id)}
                    >
                        {notification.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notification;
