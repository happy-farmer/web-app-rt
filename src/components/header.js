/**
 * @module components/header
 * @description Contains header logic
 */

import React, { PropTypes } from 'react'

const Header = ({ userData }) => {
  // let { isLoggedIn, isFetching, data } = userData
  return (
    <header>
      <a className='logo' href='#/'>
        <img src='/assets/logo.png' />
        <span>Happy Farmer Yo!</span>
      </a>
      <form>
        <input
          type='button'
          data-provider='facebook'
          value='Login with Facebook'
          className='login-btn login-btn-facebook' />
        <input
          type='button'
          data-provider='twitter'
          value='Login with Twitter'
          className='login-btn login-btn-twitter' />
        <input
          type='button'
          data-provider='google'
          value='Login with Google'
          className='login-btn login-btn-google' />
      </form>
    </header>
  )
}

Header.propTypes = {
  userData: PropTypes.object
}

export default Header
