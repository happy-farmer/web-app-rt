/**
 * @module components/app
 * @description Assembles application
 */

import React from 'react'

import Header from './header'

let App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main></main>
      <footer></footer>
    </div>
  )
}

export default App
