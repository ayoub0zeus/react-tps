// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import { useSelector } from 'react-redux';
import Notification from './component/Notification/Notification';
import TodoAdd from './component/Todo/TodoAdd';

function App() {
  const authu = useSelector(state => state.isAuthenticated)
  if (!authu) {
    return <Login />
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/todo" element={<TodoAdd />} />
      </Routes>
    </>
  );
};

export default App;
