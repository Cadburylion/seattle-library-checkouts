import React, {Component} from 'react'
import Filter from '../filter/index.js'
import Checkouts from '../checkouts/index.js'

export default class Query extends Component {
  constructor(props){
    super(props)
    this.state={
      checkouts: null,
      type: 'BOOK',
      month: '1',
      year: '2017',
      quantity: 10,
      book: true,
      song: false,
      ebook: false,
      magazine: false,
      fetching: false,
    }
    this.typeSelect = this.typeSelect.bind(this)
    this.yearSelect = this.yearSelect.bind(this)
    this.monthSelect = this.monthSelect.bind(this)
    this.classToggle = this.classToggle.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.quantitySelect = this.quantitySelect.bind(this)
  }

  componentDidMount() {
    // this.state.checkouts ? undefined : this.handleSearch()
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
          year={this.state.year}
          month={this.state.month}
          book={this.state.book}
          ebook={this.state.ebook}
          magazine={this.state.magazine}
          song={this.state.song}
          quantity={this.state.quantity}
          yearSelect={this.yearSelect}
          monthSelect={this.monthSelect}
          handleSelect={this.handleSelect}
          quantitySelect={this.quantitySelect}
          handleSearch={this.handleSearch}
          fetching={this.state.fetching}
        />

        {this.state.checkouts ?
          <Checkouts
            checkouts={this.state.checkouts}
          />
          : undefined
        }

      </div>
    )
  }
}
