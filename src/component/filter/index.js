import React from 'react'
import QuantitySlider from '../slider/index.js'
import './style.css'

let Filter = (props) => (
  <div className='filters-container'>
    <div className={props.book ? 'btn book selected' : 'btn book'}
      onClick={() => props.handleSelect('book', 'BOOK')}>Books</div>
    <div className={props.ebook ? 'btn ebook selected' : 'btn ebook'}
      onClick={() => props.handleSelect('ebook', 'EBOOK')}>Ebooks</div>
    <div className={props.magazine ? 'btn magazine selected' : 'btn magazine'}
      onClick={() => props.handleSelect('magazine', 'MAGAZINE')}>Magazines</div>
    <div className={props.song ? 'btn song selected' : 'btn song'}
      onClick={() => props.handleSelect('song', 'SONG')}>Songs</div>

    <select className='month-list' defaultValue={props.month} onChange={props.monthSelect}>
      <option value='1'>January</option>
      <option value='2'>February</option>
      <option value='3'>March</option>
      <option value='4'>April</option>
      <option value='5'>May</option>
      <option value='6'>June</option>
      <option value='7'>July</option>
      <option value='8'>August</option>
      <option value='9'>September</option>
      <option value='10'>October</option>
      <option value='11'>November</option>
      <option value='12'>December</option>
    </select>

    <select className='year-list' defaultValue={props.year} onChange={props.yearSelect}>
      <option value='2010'>2010</option>
      <option value='2011'>2011</option>
      <option value='2012'>2012</option>
      <option value='2013'>2013</option>
      <option value='2014'>2014</option>
      <option value='2015'>2015</option>
      <option value='2016'>2016</option>
      <option value='2017' name='default-year'>2017</option>
    </select>

    <div className='slider'>
      <QuantitySlider
        quantity={props.quantity}
        handleChange={props.quantitySelect}/>
    </div>

    <button className='search-button' onClick={props.handleSearch}> Search </button>

    {props.fetching ?
      <span className='loader'></span>
      : undefined
    }
  </div>
)

export default Filter
