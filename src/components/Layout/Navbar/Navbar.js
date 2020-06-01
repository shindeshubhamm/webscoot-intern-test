import React, { useState } from 'react'
import Logo from '../../../assets/images/hnlogo.png'

const Navbar = () => {
  const [search, setSearch] = useState('')

  const changeSearch = (e) => {
    setSearch(e.target.value.trim())
    // console.log(location)
  }

  return (
    <nav className="py-2 navbar-light bg-light">
      <div className="row justify-content-between align-items-center">
        <div className="col text-center">
          <a href="#!">Login</a>
        </div>
        <div className="col-6 text-center">
          <img src={Logo} alt="Hacker News" width="40px" />
          <a className="navbar-brand" href="#!">Hacker News</a>
        </div>
        <div className="col text-center">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" value={search} aria-label="Search" onChange={changeSearch} />
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
