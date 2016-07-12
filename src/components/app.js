/**
 * @module components/app
 * @description Assembles application
 */

import '../styles/app.css'
import React from 'react'

import Header from '../components/header'

let App = ({children}) => (
  <div>
    <Header />
    <main className='container'>
      {children}
    </main>
    <footer></footer>
  </div>
)

export default App
