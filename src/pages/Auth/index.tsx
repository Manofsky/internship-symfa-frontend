import React from 'react'
import './style.scss'
import { Link, Outlet } from 'react-router-dom'

// type Props = {}

export default function Auth() {
  return (
    <div className='auth'>
      <header className='auth__header'>
        <h1>Corner Food</h1>
        <p>Delivery App </p>
        <nav>
          <Link to='login'>Login</Link>
          <Link to='signup'>Signup</Link>
        </nav>

      </header>
      <Outlet />
    </div>
  )
}