/**
 * @module components/app
 * @description Assembles application
 */

import React from 'react'
import { Route } from 'react-router'

import Header from '../components/header'
import MarketsListCont from '../containers/marketsListCont'
import MarketsItemCont from '../containers/marketsItemCont'
import '../styles/app.css'

let App = ({children}) => (
  <div>
    <Header />
    <main className='container'>
      <Route exact path='/' component={MarketsListCont} />
      <Route path='/markets/:id' component={MarketsItemCont} />
    </main>
    <footer>Don't worry, be happy!</footer>
  </div>
)

export default App
