import React from 'react'
import './style.scss'
import * as stringClean from '../../lib/util.js'


let Checkouts = (props) => (
  <ul className='checkout-container'>
      <li className='checkout-item'>
        <p className='checkout-item-title-header large cursive'> {
          props.responseType === 'BOOK' ? 'Books'
          : props.responseType === 'EBOOK' ? 'Ebooks'
          : props.responseType === 'MAGAZINE' ? 'Magazines'
          : ''
        }
        </p>
        <p className='checkout-item-amount-header cursive'> Amount </p>
        <p className='checkout-item-place-header cursive'> # </p>
      </li>
    {props.checkouts.map((item, i) =>
      <li className='checkout-item cursor' key={i} onClick={() => props.bookSearch(item)}>
        <p className='checkout-item-title'>
            {item.title.split('/').splice(0, 1).join(' ')}
        </p>
        <p className='checkout-item-amount'> {item.checkouts} </p>
        <p className='checkout-item-place'>
          {i + 1}
        </p>

        <p className='checkout-item-creator cursor'>
        {stringClean.nameCleanup(item.creator)}
        </p>

      </li>
    )}
  </ul>
)


export default Checkouts
