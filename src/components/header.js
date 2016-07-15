/**
 * @module components/header
 * @description Contains header logic
 */

import React, {PropTypes} from 'react'
import logo from '../images/logo.png'
import '../styles/header.css'
import {Link} from 'react-router'
import LoginButtons from './loginButtons'

const Header = ({ userData }) => (
  <header>
    <nav className='navbar navbar-static-top navbar-light bg-faded'>
      <Link className='navbar-brand' to='/'>
        <img className='logo' src={logo} alt='Happy Farmer' />
        <span>Happy Farmer!</span>
      </Link>
      <LoginButtons />
    </nav>
  </header>
)

Header.propTypes = {
  userData: PropTypes.object
}

export default Header
