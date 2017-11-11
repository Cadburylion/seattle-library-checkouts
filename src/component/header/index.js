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
        {`What's Seattle reading`}?
      </h2>
      {props.fetching ?
        <Loader />
        : undefined
      }
    </div>
  )
}

export default Header
