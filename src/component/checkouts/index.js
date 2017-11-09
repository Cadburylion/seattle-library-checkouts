import React from 'react'
import './style.scss'


let Checkouts = (props) => (
  <ul className='checkout-container'>
      <li className='checkout-item'>
        <p className='checkout-title-header large cursive'> {
          props.responseType === 'BOOK' ? 'Books'
          : props.responseType === 'EBOOK' ? 'Ebooks'
          : props.responseType === 'MAGAZINE' ? 'Magazines'
          : props.responseType === 'SONG' ? 'Song'
          : ''
        }
        </p>
        <p className='checkout-creator-header cursive'> Creator </p>
        <p className='checkout-amount-header cursive'> # </p>
      </li>
    {props.checkouts.map((item, i) =>
      <li className='checkout-item' key={i}>
        <p className='checkout-title cursor' onClick={() => props.bookSearch(item)}>
            {item.title.split('/').splice(0, 1).join(' ')}
        </p>
        <p className='checkout-item-creator cursor' onClick={() => props.nameSearch(item.creator)}>
          {item.creator}
        </p>
        <p className='checkout-amount'> {item.checkouts} </p>
      </li>
    )}
  </ul>
)

// <p onClick={() => props.checkoutSearch(item)} className='checkout-title cursor'>
//     {item.title.split('/').splice(0, 1).join(' ')}
// </p>

export default Checkouts
