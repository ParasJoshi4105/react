import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import {Link} from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bs-body-bg    bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.color}`} to="/"> {props.title} </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link text-${props.color}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.color}`} to="/about">{props.navlink}</Link>
              </li>
            </ul>

            <div className='differentColorFlex'>
              <div className='red'></div>
              <div className='blue'></div>
              <div className='green'></div>
              <div className='yellow'></div>
              <div className='pink'></div>
              <div className='greu'></div>
            </div>
            <div className="form-check form-switch px-3">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            </div>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}

          </div>
        </div>
      </nav>
    </>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  navlink: PropTypes.string
}

// NavBar.defaultProps = {
//   title : "Set Title Here",
// };