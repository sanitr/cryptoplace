import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const { user, logout, isAuthenticated } = useContext(AuthContext)
  return (
    <div className='navbar' >
        <img src={logo} alt=""/>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select>
                <option value ="usd">USD</option>
                <option value ="eur">EUR</option>
                <option value = "inr">INR</option>
            </select>
            {isAuthenticated ? (
              <>
                <span className='nav-user'>Hi, {user.name}</span>
                <button onClick={logout}>Log out</button>
              </>
            ) : (
              <>
                <Link to='/login'><button className='btn-ghost'>Log in</button></Link>
                <Link to='/signup'><button>Sign up<img src={arrow_icon} alt=""/></button></Link>
              </>
            )}
    </div>
    </div>
  )
}

export default Navbar
