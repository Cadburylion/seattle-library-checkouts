import React, {Component} from 'react'
import Filter from '../filter/index.js'
import Header from '../header/index.js'
import BookView from '../book-view/index.js'
import Checkouts from '../checkouts/index.js'

import {scroller} from 'react-scroll'

import './style.scss'

export default class Query extends Component {
  constructor(props){
    super(props)
    this.state={
      checkouts: null,
      fetching: false,
      responseType: '',
      searchField: '',
      bookSearchResult: '',
      bookViewOpen: false,
      bookVersion: 0,
      options: {
        month: '1',
        year: '2017',
        quantity: 10,
      },
      typeSelected: {
        book: false,
        song: false,
        ebook: false,
        magazine: false,
      },
    }
    this.bookNext = this.bookNext.bind(this)
    this.fetchTrue = this.fetchTrue.bind(this)
    this.bookSearch = this.bookSearch.bind(this)
    this.yearSelect = this.yearSelect.bind(this)
    this.monthSelect = this.monthSelect.bind(this)
    this.classToggle = this.classToggle.bind(this)
    this.fetchLibrary = this.fetchLibrary.bind(this)
    this.bookPrevious = this.bookPrevious.bind(this)
    this.authorSearch = this.authorSearch.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.resetSelected = this.resetSelected.bind(this)
    this.bookViewToggle = this.bookViewToggle.bind(this)
    this.quantitySelect = this.quantitySelect.bind(this)
  }

  fetchLibrary(type){
    let {options} = this.state

    this.fetchTrue()

    fetch(`https://data.seattle.gov/resource/tjb6-zsmc.json?$order=checkouts DESC&materialtype=${type}&$limit=${options.quantity}&checkoutyear=${options.year}&checkoutmonth=${options.month}`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        checkouts: data,
        fetching: false,
        responseType: type,
      })
    })
  }

  bookSearch(e, book){
    e.preventDefault()
    let title = (typeof book === 'string') ? book : book.title

    this.fetchTrue()

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        bookSearchResult: data,
        fetching: false,
      })
    })
    .then(() => {
      this.bookViewToggle()
    })
  }

  handleSelect(classType, type){
    this.classToggle(classType)
    this.fetchLibrary(type)
  }

  handleChange(e){
    this.setState({
      searchField: e.target.value,
    })
  }

  classToggle(selected){
    this.setState({
      typeSelected: {
        book: false,
        ebook: false,
        magazine: false,
        [selected]: true,
      }
    })
  }

  resetSelected(){
    this.setState({
      typeSelected: {
        book: false,
        ebook: false,
        magazine: false,
      }
    })
  }

  yearSelect(e){
    let {value} = e.target
    this.setState(prevState => ({
      options: {...prevState.options, year: value}
    }))
    this.resetSelected()
  }

  monthSelect(e){
    let {value} = e.target
    this.setState(prevState => ({
      options: {...prevState.options, month: value}
    }))
    this.resetSelected()
  }

  quantitySelect(value){
    this.setState(prevState => ({
      options: {...prevState.options, quantity: value}
    }))
    this.resetSelected()
  }

  authorSearch(name){
    window.open(`https://en.wikipedia.org/w/index.php?search=${name}`)
  }

  fetchTrue(){
    this.setState({
      fetching: true,
    })
  }

  bookViewToggle(){
    this.setState(prevState => ({
      bookViewOpen: !prevState.bookViewOpen,
      bookVersion: 0,
    }))
  }

  bookNext(){
    this.setState(prevState => ({
      bookVersion: prevState.bookVersion === 2 ? 0 : prevState.bookVersion + 1,
    }))
  }

  bookPrevious(){
    this.setState(prevState => ({
      bookVersion: prevState.bookVersion === 0 ? 2 : prevState.bookVersion - 1,
    }))
  }

  scrollToTop(){
    scroller.scrollTo('header-top', {
      duration: 250,
      delay: 0,
      smooth: true,
      offset: 0,
    })
  }

  render(){
    console.log('query state: ', this.state)
    return(
      <main className='app-container'>

        <Header fetching={this.state.fetching}/>
        <div className='title-space'></div>
        {!this.state.bookViewOpen ?
          <div className='default-view'>
            <Filter
              options={this.state.options}
              fetching={this.state.fetching}
              searchField={this.state.searchField}
              typeSelected={this.state.typeSelected}

              bookSearch={this.bookSearch}
              yearSelect={this.yearSelect}
              monthSelect={this.monthSelect}
              handleChange={this.handleChange}
              handleSelect={this.handleSelect}
              quantitySelect={this.quantitySelect}
            />

            {this.state.checkouts ?
              <Checkouts
                checkouts={this.state.checkouts}
                responseType={this.state.responseType}

                bookSearch={this.bookSearch}
                scrollToTop={this.scrollToTop}
                authorSearch={this.authorSearch}
              />
              : undefined
            }
          </div>
        : undefined
      }

        {this.state.bookViewOpen ?
          <BookView
            bookVersion={this.state.bookVersion}
            bookViewOpen={this.state.bookViewOpen}
            bookSearchResult={this.state.bookSearchResult}

            bookNext={this.bookNext}
            bookSearch={this.bookSearch}
            bookPrevious={this.bookPrevious}
            authorSearch={this.authorSearch}
            bookViewToggle={this.bookViewToggle}
          />
          : undefined
        }
      </main>
    )
  }
}
