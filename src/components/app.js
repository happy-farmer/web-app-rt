/**
 * @module components/app
 * @description Assembles application
 */

import '../styles/app.css'
import React from 'react'

import Header from '../components/header'

let App = ({children}) => (
  <div className='wrapper'>
    <Header />
    <main>
      {children}
    </main>
    <footer></footer>
  </div>
)

export default App
