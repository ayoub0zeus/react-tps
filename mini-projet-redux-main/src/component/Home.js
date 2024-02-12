import React from 'react'
import Navbar from './Navbar/Navbar'
import { useSelector } from 'react-redux';


export default function Home() {
  const user = useSelector(state => state.user);

  return (
    <>
      <Navbar />
      <div>
        <h1>Welcome {user.username}</h1>
        <h1>Email: {user.email}</h1>
      </div>
    </>
  )
}
