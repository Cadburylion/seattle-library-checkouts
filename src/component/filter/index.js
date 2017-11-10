import React from 'react'
import Loader from '../loader/index.js'
import FontAwesome from 'react-fontawesome'
import QuantitySlider from '../slider/index.js'
import SearchField from '../search-field/index.js'
import SearchButton from '../search-button/index.js'
import CheckoutTypeButton from '../checkout-type-button/index.js'
import './style.scss'

let Filter = (props) => (
  <div className='filters-container'>

    <CheckoutTypeButton
      typeSelected={props.typeSelected.book}
      handleSelect={props.handleSelect}
      classType={'book'}
      materialType={'BOOK'}
      buttonName={'Books'}
    />

    <FontAwesome
      className={`book-icon ${props.typeSelected.book ? 'selected' : '' }`}
      name='book'
    />

    <CheckoutTypeButton
      typeSelected={props.typeSelected.ebook}
      handleSelect={props.handleSelect}
      classType={'ebook'}
      materialType={'EBOOK'}
      buttonName={'Ebooks'}
    />

    <FontAwesome
      className={`ebook-icon ${props.typeSelected.ebook ? 'selected' : '' }`}
      name='tablet'
    />

    <CheckoutTypeButton
      typeSelected={props.typeSelected.magazine}
      handleSelect={props.handleSelect}
      classType={'magazine'}
      materialType={'MAGAZINE'}
      buttonName={'Magazines'}
    />

    <FontAwesome
      className={`magazine-icon ${props.typeSelected.magazine ? 'selected' : '' }`}
      name='newspaper-o'
    />

    <select className='month-list cursive' defaultValue={props.options.month} onChange={props.monthSelect}>
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

    <select className='year-list cursive' defaultValue={props.options.year} onChange={props.yearSelect}>
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
        quantity={props.options.quantity}
        handleChange={props.quantitySelect}/>
    </div>

    <div className='slider-quantity cursive'>
      {props.options.quantity} items
    </div>

    <SearchField
      inputText={'search google books'}
      bookSearch={props.bookSearch}
      searchField={props.searchField}
      handleChange={props.handleChange}
    />

  </div>
)

export default Filter
