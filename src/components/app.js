/**
 * @module components/app
 * @description Assembles application
 */

import React from 'react'

import Header from './header'

let App = () => {
  return (
    <div class='wrapper'>
      <Header />
      <main></main>
      <footer></footer>
    </div>
  )
}

export default App
