import React from 'react'
import "./mainContent.style.css";

const SideNav = () => {
  return (

    <div className="col-sm-3 sidenav">
      <h4>John's Blog</h4>
      <ul className="nav flex-column">
        <li className="nav-item"><a className='nav-link active' href="#section1">Home</a></li>
        <li className="nav-item"><a className='nav-link active' href="#section2">Friends</a></li>
        <li className="nav-item"><a className='nav-link active' href="#section3">Family</a></li>
        <li className="nav-item"><a className='nav-link active' href="#section3">Photos</a></li>
      </ul><br/>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </nav>
    </div>
  )
}

export default SideNav
