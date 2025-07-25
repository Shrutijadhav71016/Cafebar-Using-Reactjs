import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light navbar_container">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Cafe<span style={{color:'beige'}}>  Bar</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/menu">Menu</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar