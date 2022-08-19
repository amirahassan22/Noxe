import React from 'react'
import navbarStyles from './Navbar.module.css'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  console.log(props.userData)
  return (
    
    <>
    <nav className="navbar navbar-expand-lg py-3">
  <div className="container d-flex justify-content-center align-items-center">
    <Link className={`navbar-brand ${navbarStyles.logo} ${navbarStyles.textColor}`} to='home'>Noxe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {props.userData?<ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${navbarStyles.active} ${navbarStyles.textColor}`} to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${navbarStyles.textColor}`} to="movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${navbarStyles.textColor}`} to="tvshows">TVshows</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${navbarStyles.textColor}`} to="people">People</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${navbarStyles.textColor}`} to="about">About</Link>
        </li>
      </ul>:''}
      {props.userData == null?<div className="ms-auto d-flex justify-content-center align-items-center">
        <Link className={` ${navbarStyles.navbtn} rounded-3 py-1 px-3 me-1 me-1`} to='register'>Create Account</Link>
        <Link className={` ${navbarStyles.navbtn} rounded-3 py-1 px-3 me-1`} to='login'>Sign in</Link>
      </div>:<button className={`ms-auto ${navbarStyles.navbtn} rounded-3 py-1 px-3 me-1`} onClick={props.logOut}>Logout</button>}
    </div>
  </div>
</nav></>
  )
}
