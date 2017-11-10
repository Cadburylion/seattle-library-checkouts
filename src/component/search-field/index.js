import React from 'react'
import './style.scss'

const SearchField = (props) => {
  return (
    <form className='search-form' onSubmit={(e)=>props.bookSearch(e, props.searchField)}>
      <input
        className='search-field'
        type='text'
        placeholder={props.inputText}
        onChange={props.handleChange}>
      </input>
    </form>
  )
}

export default SearchField
