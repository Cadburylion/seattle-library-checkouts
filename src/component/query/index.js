import React, {Component} from 'react'
import Filter from '../filter/index.js'
import Checkouts from '../checkouts/index.js'

export default class Query extends Component {
  constructor(props){
    super(props)
    this.state={
      checkouts: null,
      fetching: false,
      responseType: '',
      options: {
        type: 'BOOK',
        month: '1',
        year: '2017',
        quantity: 10,
      },
      typeSelected: {
        book: true,
        song: false,
        ebook: false,
        magazine: false,
      },
    }
    this.typeSet = this.typeSet.bind(this)
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

    let {options} = this.state

    fetch(`https://data.seattle.gov/resource/tjb6-zsmc.json?$order=checkouts DESC&materialtype=${options.type}&$limit=${options.quantity}&checkoutyear=${options.year}&checkoutmonth=${options.month}`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        checkouts: data,
        fetching: false,
        responseType: options.type,
      })
    })
  }

  handleSelect(classToToggle, type){
    this.classToggle(classToToggle)
    this.typeSet(type)
  }

  classToggle(selected){
    this.setState({
      typeSelected: {
        book: false,
        ebooK: false,
        magazine: false,
        song: false,
        [selected]: true,
      }
    })
  }

  typeSet(materialType){
    this.setState(prevState => ({
      options: {...prevState.options, type: materialType}
    }))
  }

  yearSelect(e){
    let {value} = e.target
    this.setState(prevState => ({
      options: {...prevState.options, year: value}
    }))
  }

  monthSelect(e){
    let {value} = e.target
    this.setState(prevState => ({
      options: {...prevState.options, month: value}
    }))
  }

  quantitySelect(value){
    this.setState(prevState => ({
      options: {...prevState.options, quantity: value}
    }))
  }

  render(){
    console.log('query state: ', this.state)
    return(
      <div className='query-container'>
        <Filter
          options={this.state.options}
          typeSelected={this.state.typeSelected}
          fetching={this.state.fetching}

          yearSelect={this.yearSelect}
          monthSelect={this.monthSelect}
          handleSelect={this.handleSelect}
          quantitySelect={this.quantitySelect}
          handleSearch={this.handleSearch}
        />

        {this.state.checkouts ?
          <Checkouts
            checkouts={this.state.checkouts}
            responseType={this.state.responseType}
          />
          : undefined
        }

      </div>
    )
  }
}
