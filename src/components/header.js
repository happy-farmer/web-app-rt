/**
 * @module components/header
 * @description Contains header logic
 */

import React, { PropTypes } from 'react'
import logo from '../images/logo.png'
import '../styles/header.css'
import {Link} from 'react-router'

const Header = ({ userData }) => {
  // let { isLoggedIn, isFetching, data } = userData
  return (
    <header>
      <nav className='navbar navbar-static-top navbar-light bg-faded'>
        <Link className='navbar-brand' to='/'>
          <img className='hpf-logo' src={logo} alt='Happy Farmer' />
          <span>Happy Farmer!</span>
        </Link>
        <form className='login-form'>
          <a
            data-provider='facebook'
            title='Login with Facebook'
            className='login-button login-facebook'>
            <i className='fa fa-facebook-official fa-2x' aria-hidden='true'></i>
          </a>
          <a
            data-provider='twitter'
            title='Login with Twitter'
            className='login-button login-twitter'>
            <i className='fa fa-twitter-square fa-2x' aria-hidden='true'></i>
          </a>
          <a
            data-provider='google'
            title='Login with Google'
            className='login-button login-google'>
            <i className='fa fa-google-plus-square fa-2x' aria-hidden='true'></i>
          </a>
        </form>
      </nav>
    </header>
  )
}

Header.propTypes = {
  userData: PropTypes.object
}

export default Header
