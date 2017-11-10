import React from 'react'
import './style.scss'
import FontAwesome from 'react-fontawesome'

let BookView = (props) => {
  let {volumeInfo} = props.bookSearchResult.items[props.bookVersion]
  let imageLinks = volumeInfo.imageLinks ? volumeInfo.imageLinks : ''
  let title = volumeInfo.title ? volumeInfo.title : ''
  let subtitle = volumeInfo.subtitle ? volumeInfo.subtitle : ''
  let authors = volumeInfo.authors ? volumeInfo.authors : ''
  let description = volumeInfo.description ? volumeInfo.description : ''
  let checkoutString = title.split(' ').join('+')
  window.scrollTo(0, 0);
  return(
    <div className='book-view-container'>
      <div className='book-information-container'>

        <p className='version-counter'>{props.bookVersion + 1}/3</p>

        <a className='library-link' href={`https://seattle.bibliocommons.com/v2/search?query=${checkoutString}&searchType=smart`} target='_#'>Library</a>

        <FontAwesome
          onClick={props.bookViewToggle}
          className={'close-icon cursor'}
          name='times'
        />

        <a className='google-books-link' href={volumeInfo.infoLink} target='_#'>Google Books</a>

        <img className='cover' src={imageLinks.thumbnail} alt='book cover' />

        <p className='book-title'>{title}</p>
        <p className='book-subtitle'>{subtitle}</p>
        <p className='book-author'>{authors}</p>

        <FontAwesome
        onClick={props.bookPrevious}
        className={'left-arrow-icon cursor'}
        name='arrow-left'
        />

        <FontAwesome
        onClick={props.bookNext}
        className={'right-arrow-icon cursor'}
        name='arrow-right'
        />

      </div>
      <div className='book-description-container'>
        <p className='book-description'>{description}</p>
      </div>
    </div>
  )
}

export default BookView
