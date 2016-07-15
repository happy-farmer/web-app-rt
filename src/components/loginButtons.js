/**
 * @module components/loginButtons
 * @description Login buttons and friends
 */

import React from 'react'
import '../styles/loginButtons.css'
import {loginButtons} from 'app.conf.json'

const loginButtonsProps = {
  facebook: {
    buttonClass: 'login-facebook',
    buttonTitle: 'Login with Facebook',
    iconClass: 'fa-facebook-square'
  },
  twitter: {
    buttonClass: 'login-facebook',
    buttonTitle: 'Login with Twitter',
    iconClass: 'fa-twitter-square'
  },
  google: {
    buttonClass: 'login-google',
    buttonTitle: 'Login with Google',
    iconClass: 'fa-google-plus-square'
  }
}

let buttons = []
for (let provider in loginButtons) {
  buttons.push({
    provider,
    url: loginButtons[provider],
    buttonTitle: loginButtonsProps[provider].buttonTitle,
    buttonClass: `login-button ${loginButtonsProps[provider].buttonClass}`,
    iconClass: `fa fa-2x ${loginButtonsProps[provider].iconClass}`
  })
}

let Button = ({provider, url, buttonTitle, buttonClass, iconClass}) => (
  <a
    href={url}
    data-provider={provider}
    title={buttonTitle}
    className={buttonClass}>
    <i className={iconClass} aria-hidden='true'></i>
  </a>
)

const LoginButtons = () => (
  <div className='login-buttons'>
    {buttons.map((data, ix) => <Button key={ix} {...data} />)}
  </div>
)

export default LoginButtons
