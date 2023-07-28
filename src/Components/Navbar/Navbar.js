import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>User System Management</h1>
 <ul>
<Link to="/"> Home</Link> 
<Link to="/contact">Contact</Link>
<Link to="/users">Users</Link>
<Link to="/about">About</Link>
</ul>
</nav>
    </div>
  )
}

export default Navbar