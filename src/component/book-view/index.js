import React from 'react'
import './style.scss'
import FontAwesome from 'react-fontawesome'

let BookView = (props) => {
  let {volumeInfo} = props.bookSearchResult.items[props.bookVersion]
  let imageLinks = volumeInfo.imageLinks ? volumeInfo.imageLinks : ''
  let title = volumeInfo.title ? volumeInfo.title : ''
  let subtitle = volumeInfo.subtitle ? volumeInfo.subtitle : ''
  let authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : ''
  // let authorSearchString = authors
  let description = volumeInfo.description ? volumeInfo.description : ''
  let checkoutString = title.split(' ').join('+')
  window.scrollTo(0, 0);
  return(
    <div className='book-view-container'>
      <div className='book-information-container'>

        <p className='version-counter'>{props.bookVersion + 1}/3</p>

        <a className='library-link' href={`https://seattle.bibliocommons.com/v2/search?query=${checkoutString}&searchType=smart`} target='_#'>
          <span className={'library-icon'}>
            <FontAwesome name='university' />
          </span>
          Check library
        </a>

        <FontAwesome
          onClick={props.bookViewToggle}
          className={'close-icon cursor'}
          name='times'
        />

        <img className='cover' src={imageLinks.thumbnail} alt='book cover' />

        <div className='book-title'>{title}</div>
        <p className='book-subtitle'>{subtitle}</p>
        <p className='book-author cursor' onClick={() => props.authorSearch(authors)}>{`${authors} `}
        <span className={'author-link-icon'}>
          <FontAwesome name='external-link' />
        </span>
        </p>

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

        <div className='book-description-container'>
        <p className='book-description'>{`${description} `}</p>
        <div className='fade-anchor'></div>
        <a className='read-more' href={volumeInfo.infoLink} target='_#'>Read More</a>
        </div>
      </div>
    </div>
  )
}
// <a className='google-books-link' href={volumeInfo.infoLink} target='_#'>
//   read more at Google Books
// </a>

export default BookView
