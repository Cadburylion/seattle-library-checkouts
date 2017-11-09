import React from 'react'
import './style.scss'
import FontAwesome from 'react-fontawesome'

let BookView = (props) => {
  console.log('BookView props: ', props)
  let {volumeInfo} = props.bookSearchResult.items[props.bookVersion]
  let imageLinks = volumeInfo.imageLinks ? volumeInfo.imageLinks : ''
  let title = volumeInfo.title ? volumeInfo.title : ''
  let subtitle = volumeInfo.subtitle ? volumeInfo.subtitle : ''
  let authors = volumeInfo.authors ? volumeInfo.authors : ''
  let description = volumeInfo.description ? volumeInfo.description : ''
  return(
    <div className='book-view-container'>
      <div className='book-information-container'>
        <img className='cover' src={imageLinks.thumbnail} alt='book cover' />

        <FontAwesome
          onClick={props.bookViewToggle}
          className={'close-icon cursor'}
          name='times'
        />
        <FontAwesome
          onClick={props.bookNext}
          className={'left-arrow-icon cursor'}
          name='arrow-left'
        />
        <FontAwesome
          onClick={props.bookPrevious}
          className={'right-arrow-icon cursor'}
          name='arrow-right'
        />
        <p className='book-title'>{volumeInfo.title}</p>
        <p className='book-subtitle'>{volumeInfo.subtitle}</p>
        <p className='book-author'>{volumeInfo.authors}</p>
      </div>
      <div className='book-description-container'>
        <p className='book-description'>{volumeInfo.description}</p>
      </div>
    </div>
  )
}

export default BookView
