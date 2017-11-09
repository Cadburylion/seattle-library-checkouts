import React, {Component} from 'react'
import Filter from '../filter/index.js'
import Checkouts from '../checkouts/index.js'
import BookView from '../book-view/index.js'

export default class Query extends Component {
  constructor(props){
    super(props)
    this.state={
      checkouts: null,
      fetching: false,
      responseType: '',
      bookSearchResult: '',
      bookViewOpen: false,
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
    this.nameSearch = this.nameSearch.bind(this)
    this.bookSearch = this.bookSearch.bind(this)
    this.bookViewToggle = this.bookViewToggle.bind(this)
    this.checkoutSearch = this.checkoutSearch.bind(this)
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

  checkoutSearch(item){
    let titleString = item.title.split(' ').join('+')
    window.open(`https://seattle.bibliocommons.com/v2/search?query=${titleString}&searchType=smart`)
  }

  nameSearch(name){
    let creatorString = name.indexOf(',') >= 0 ? name.split(',').reverse().join('+') : name
    creatorString = /\d/.test(creatorString) ? creatorString.replace(/[^a-zA-Z]/g, ' ') : creatorString
    window.open(`https://en.wikipedia.org/w/index.php?search=${creatorString}`)
  }

  bookSearch(book){
    // window.open(`https://www.googleapis.com/books/v1/volumes?q=the+eye+of+the+world`)
    // this.bookViewToggle()
    let bookString = book.title.split('/').splice(0, 1).join('+')
    console.log('bookString: ', bookString)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookString}`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        bookSearchResult: data,
      })
    })
    .then(() => {
      this.bookViewToggle()
    })
  }

  bookViewToggle(){
    this.setState(prevState => ({
      bookViewOpen: !prevState.bookViewOpen,
    }))
  }

  render(){
    console.log('query state: ', this.state)
    return(
      <div className='query-container'>

        {!this.state.bookViewOpen ?
          <div className='default-view'>
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
                nameSearch={this.nameSearch}
                checkoutSearch={this.checkoutSearch}
                responseType={this.state.responseType}
                bookSearch={this.bookSearch}
              />
              : undefined
            }
          </div>
        : undefined
      }

        {this.state.bookViewOpen ?
          <BookView
            bookViewOpen={this.state.bookViewOpen}
            bookSearchResult={this.state.bookSearchResult}
            bookSearch={this.bookSearch}
            bookViewToggle={this.bookViewToggle}
          />
          : undefined
        }
      </div>
    )
  }
}
