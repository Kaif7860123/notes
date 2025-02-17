import React from 'react'

function Navbar() {
  
  return (
    <>
      <nav className="navbar navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand">Notes</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
  )
}

export default Navbar
