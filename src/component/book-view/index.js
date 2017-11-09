import React from 'react'
import './style.scss'

let BookView = (props) => {
  console.log('BookView props: ', props)
  return(
    <div>
      <p onClick={props.bookSearch}>
        BOOK TITLE
      </p>

      {props.bookViewOpen ?
        <div className='book-view-container'>
          <div className='book-view-close'></div>
            <p onClick={props.bookViewToggle}>BookView</p>
        </div>
        : undefined
      }

    </div>
  )
}

export default BookView
