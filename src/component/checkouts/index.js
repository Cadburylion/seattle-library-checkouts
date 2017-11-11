import React from 'react'
import FontAwesome from 'react-fontawesome'
import './style.scss'
import * as stringClean from '../../lib/util.js'

let Checkouts = (props) => (
  <ul className='checkout-container'>
      <li className='checkout-item-header'>
        <p className='checkout-item-title-header large cursive'> {
          props.responseType === 'BOOK' ? 'Books'
          : props.responseType === 'EBOOK' ? 'Ebooks'
          : props.responseType === 'MAGAZINE' ? 'Magazines'
          : props.responseType === 'AUDIOBOOK' ? 'Audiobooks'
          : ''
        }
        </p>
        <p className='checkout-item-amount-header cursive'> Amount </p>
        <p className='checkout-item-place-header cursive'> # </p>
      </li>

    {props.checkouts.map((item, i) =>
      <li className='checkout-item cursor' key={i} onClick={(e) => props.bookSearch(e, item)}>
        <p className='checkout-item-title'>
          {stringClean.removeUnabridged(stringClean.removeAuthorFromTitle(item.title))}
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
    <div className='up-arrow-icon' onClick={props.scrollToTop}>
      <FontAwesome
        name='angle-up'
      />
    </div>

    <div className='checkout-end-space'></div>
  </ul>
)


export default Checkouts
