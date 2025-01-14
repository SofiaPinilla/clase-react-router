import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to="/">Home</Link> / 
        <Link to="/nameForm">Name Form</Link> / 
        <Link to="/userForm">User Form</Link>
    </div>
  )
}

export default Header