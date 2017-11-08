import React from 'react'
import './style.css'

let Checkouts = (props) => (
  <ul className='checkout-container'>
      <li className='checkout-item'>
        <p className='checkout-amount'> Amount </p>
        <p className='checkout-title'> Title </p>
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
