import React from 'react'
import{Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
        
        <Link to='/'>Home</Link>
        <Link to='/Products'>Products</Link>
        <Link to='/Login'>Log In</Link>
        <Link to='/Register'>Register</Link>
      


    </div>
  )
}
