import React from 'react'
import Loader from '../loader/index.js'

import './style.scss'

let Header = (props) => {
  return(
    <div className='header-container'>
      <div id='header-top'></div>
      <h1 className='app-title'>
        <span className='title-first'>Seattle</span>
        <span className='title-second'>Reads</span>
      </h1>

      <h2 className='app-subtitle'>
        {`View Seattle's library checkouts & discover new reads`}
      </h2>
      {props.fetching ?
        <Loader />
        : undefined
      }

    </div>
  )
}

export default Header
