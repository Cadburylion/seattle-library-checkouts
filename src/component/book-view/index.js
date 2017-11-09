import React from 'react'
import './style.scss'

let BookView = (props) => {
  console.log('BookView props: ', props)
  return(
    <div className='book-view-container'>
      <img className='cover' src={props.bookSearchResult.items[0].volumeInfo.imageLinks.thumbnail} alt='The Eye of the World book cover' />
      <p className='book-view-close'onClick={props.bookViewToggle}>BookView</p>

      <p className='book-title'>{props.bookSearchResult.items[0].volumeInfo.title}</p>

      <p className='book-subtitle'>{props.bookSearchResult.items[0].volumeInfo.subtitle}</p>

      <p className='book-author'>{props.bookSearchResult.items[0].volumeInfo.authors.toString()}</p>
      <p className='book-description'>{props.bookSearchResult.items[0].volumeInfo.description}</p>
    </div>
  )
}

export default BookView
