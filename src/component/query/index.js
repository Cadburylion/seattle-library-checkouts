import React, {Component} from 'react'
import QuantitySlider from '../slider/index.js'
import './style.css'

export default class Query extends Component {
  constructor(props){
    super(props)
    this.state={
      checkouts: null,
      type: null,
      month: '1',
      year: '2017',
      fetching: false,
      quantity: 10,
      book: true,
      ebook: false,
      magazine: false,
      song: false,
    }
    this.typeSelect = this.typeSelect.bind(this)
    this.yearSelect = this.yearSelect.bind(this)
    this.monthSelect = this.monthSelect.bind(this)
    this.classToggle = this.classToggle.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.quantitySelect = this.quantitySelect.bind(this)
  }

  handleSearch(){
    this.setState({
      fetching: true,
    })
    fetch(`https://data.seattle.gov/resource/tjb6-zsmc.json?$order=checkouts DESC&materialtype=${this.state.type}&$limit=${this.state.quantity}&checkoutyear=${this.state.year}&checkoutmonth=${this.state.month}`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        checkouts: data,
        fetching: false,
      })
    })
  }

  typeSelect(materialType){
    this.setState({
      type: materialType,
    })
  }

  handleSelect(classToToggle, type){
    this.classToggle(classToToggle)
    this.typeSelect(type)
  }

  yearSelect(e){
    this.setState({
      year: e.target.value,
    })
  }

  monthSelect(e){
    this.setState({
      month: e.target.value,
    })
  }

  quantitySelect(value){
    this.setState({
      quantity: value,
    })
  }

  classToggle(selected){
    this.setState(prevState => ({
      bookSelected: false,
      ebookSelected: false,
      magazineSelected: false,
      songSelected: false,
      [selected]: !prevState[selected],
    }))
  }

  render(){
    console.log('query state: ', this.state)
    return(
      <div>

        <button onClick={this.handleSearch}> Search </button>
        <form>

          <div className='type-container'>
            <div className={this.state.bookSelected ? 'btn book selected' : 'btn book'}
              onClick={() => this.handleSelect('bookSelected', 'BOOK')}>Book</div>
            <div className={this.state.ebookSelected ? 'btn ebook selected' : 'btn ebook'}
              onClick={() => this.handleSelect('ebookSelected', 'EBOOK')}>Ebook</div>
            <div className={this.state.magazineSelected ? 'btn magazine selected' : 'btn magazine'}
              onClick={() => this.handleSelect('magazineSelected', 'MAGAZINE')}>Magazine</div>
            <div className={this.state.songSelected ? 'btn song selected' : 'btn song'}
              onClick={() => this.handleSelect('songSelected', 'SONG')}>Song</div>
          </div>

          <select defaultValue={this.state.year} onChange={this.yearSelect}>
            <option value='2010'>2010</option>
            <option value='2011'>2011</option>
            <option value='2012'>2012</option>
            <option value='2013'>2013</option>
            <option value='2014'>2014</option>
            <option value='2015'>2015</option>
            <option value='2016'>2016</option>
            <option value='2017' name='default-year'>2017</option>
          </select>


          <select defaultValue={this.state.month} onChange={this.monthSelect}>
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
        </form>
        <div className='slider'>
          <QuantitySlider
            quantity={this.state.quantity}
            handleChange={this.quantitySelect}/>
        </div>

        {this.state.fetching ?
          <span className='loader'></span>
          : undefined
        }

        {this.state.checkouts ?
          <ul>
            {this.state.checkouts.map((item, i) => <li key={i}>{item.title}</li>)}
          </ul>
          : undefined
        }
      </div>
    )
  }
}
