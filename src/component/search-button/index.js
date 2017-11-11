import React from 'react'
import './style.scss'

let SearchButton = (props) => (
  <div className={`search-button ${props.fetching ? 'selected' : ''}`}
    onClick={()=>props.bookSearch(props.searchField)}>
    <p>{props.buttonName}</p>
  </div>
)

export default SearchButton
