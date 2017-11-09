import React from 'react'
import './style.scss'

let BookView = (props) => {
  console.log('BookView props: ', props)
  return(
    <div className='book-view-container'>
      {props.bookViewOpen ?
        <div className='book-view-content'>
          <p className='book-view-close'onClick={props.bookViewToggle}>BookView</p>
          <p> Title: {props.bookSearchResult.items[0].volumeInfo.title} </p>
          <p> Subtitle: {props.bookSearchResult.items[0].volumeInfo.subtitle} </p>
          <p> Author: {props.bookSearchResult.items[0].volumeInfo.authors.toString()} </p>
          <p> Description: {props.bookSearchResult.items[0].volumeInfo.description} </p>
          <img src={props.bookSearchResult.items[0].volumeInfo.imageLinks.thumbnail} alt='The Eye of the World book cover' />
        </div>
        : undefined
      }
    </div>
  )
}

export default BookView
