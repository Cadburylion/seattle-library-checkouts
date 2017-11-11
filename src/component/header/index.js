import React from 'react'
import Loader from '../loader/index.js'

import './style.scss'

let Header = (props) => {
  return(
    <div className='header-container'>

      <h1 className='app-title'>
        <span className='title-first'>Seattle</span>
        <span className='title-second'>Reads</span>
      </h1>

      <h2 className='app-subtitle'>
        {`View Seattle's library checkouts and discover new reads`}
      </h2>
      {props.fetching ?
        <Loader />
        : <Loader />
      }



    </div>
  )
}

export default Header
