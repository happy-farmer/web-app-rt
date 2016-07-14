/**
 * @module components/loader
 *
 */

import React from 'react'
import '../styles/loader.css'

const Loader = () => (
  <article className='loader'>
    <i className='fa fa-spinner fa-spin fa-3x fa-fw'></i>
    <span className='sr-only'>Loading...</span>
  </article>
)

export default Loader
