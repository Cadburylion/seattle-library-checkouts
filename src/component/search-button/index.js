import React from 'react'
import './style.css'

let SearchButton = (props) => (
  <div className='search-button' onClick={props.handleSearch}>
    <p>{props.buttonName}</p>
  </div>
)

export default SearchButton
