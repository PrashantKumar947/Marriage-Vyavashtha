import React from 'react'


function Navbar() {
  return (
    <nav className="navbar bg-info"  >
    <div className="container-fluid">
      <a className="navbar-brand fw-bold">Marriage Vyavashtha</a>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <button className="btn btn-outline-success ms-2">Signup</button>
        <button className="btn btn-outline-success ms-2">Login</button>
      </form>
    </div>
  </nav>
  

  )
}

export default Navbar