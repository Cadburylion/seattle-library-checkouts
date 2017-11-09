import React from 'react'
import './style.scss'

let BookView = (props) => {
  console.log('BookView props: ', props)
  return(
    <div className='book-view-container'>
      <div className='book-information-container'>
        <img className='cover' src={props.bookSearchResult.items[props.bookVersion].volumeInfo.imageLinks.thumbnail} alt='book cover' />
        <div className='book-view-close' onClick={props.bookViewToggle}>
          <span></span>
          <span></span>
        </div>
        <p className='book-title' onClick={props.bookNext}>{props.bookSearchResult.items[props.bookVersion].volumeInfo.title}</p>
        <p className='book-subtitle'>{props.bookSearchResult.items[props.bookVersion].volumeInfo.subtitle}</p>
        <p className='book-author' onClick={props.bookPrevious}>{props.bookSearchResult.items[props.bookVersion].volumeInfo.authors.toString()}</p>
      </div>
      <div className='book-description-container'>
        <p className='book-description'>{props.bookSearchResult.items[props.bookVersion].volumeInfo.description}</p>
      </div>
    </div>
  )
}

export default BookView
