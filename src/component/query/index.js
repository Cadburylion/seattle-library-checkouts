import React, {Component} from 'react'
import QuantitySlider from '../slider/index.js'
import Filter from '../filter/index.js'
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
    this.handleSelect = this.handleSelect.bind(this)
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
      book: false,
      ebook: false,
      magazine: false,
      song: false,
      [selected]: !prevState[selected],
    }))
  }

  render(){
    console.log('query state: ', this.state)
    return(
      <div>
        <Filter
          handleSelect={this.handleSelect}
          monthSelect={this.monthSelect}
          yearSelect={this.yearSelect}
          year={this.state.year}
          month={this.state.month}
          book={this.state.book}
          ebook={this.state.ebook}
          magazine={this.state.magazine}
          song={this.state.song}
        />
        <button onClick={this.handleSearch}> Search </button>

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
