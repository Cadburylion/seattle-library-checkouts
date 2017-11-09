import React from 'react'
import './style.scss'


let Checkouts = (props) => (
  <ul className='checkout-container'>
      <li className='checkout-item'>
        <p className='checkout-amount cursive'> Checked out </p>
        <p className='checkout-title large cursive'> {
          props.responseType === 'BOOK' ? 'Books'
          : props.responseType === 'EBOOK' ? 'Ebooks'
          : props.responseType === 'MAGAZINE' ? 'Magazines'
          : props.responseType === 'SONG' ? 'Song'
          : ''
        }
        </p>
        <p className='checkout-creator cursive'> Creator </p>
      </li>
    {props.checkouts.map((item, i) =>
      <li className='checkout-item' key={i}>
        <p className='checkout-amount'> {item.checkouts} </p>
        <p onClick={() => props.checkoutSearch(item)} className='checkout-title cursor'>
            {item.title.split('/').splice(0, 1).join(' ')}
        </p>
        <p className='item-creator cursor' onClick={() => props.nameSearch(item.creator)}>
          {item.creator}
        </p>
      </li>
    )}
  </ul>
)

export default Checkouts
