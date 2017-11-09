import React from 'react'
import './style.scss'

let Checkouts = (props) => (
  <ul className='checkout-container'>
      <li className='checkout-item'>
        <p className='checkout-amount cursive'> # checked out </p>
        <p className='checkout-title large cursive'> {
          props.responseType === 'BOOK' ? 'Books'
          : props.responseType === 'EBOOK' ? 'Ebooks'
          : props.responseType === 'MAGAZINE' ? 'Magazines'
          : props.responseType === 'SONG' ? 'Song'
          : ''
        }
        </p>
      </li>
    {props.checkouts.map((item, i) =>
      <li className='checkout-item' key={i}>
        <p className='checkout-amount'> {item.checkouts} </p>
        <p className='checkout-title'> {item.title} </p>
      </li>
    )}
  </ul>
)

export default Checkouts
