import React, {Component} from 'react'

export default class Query extends Component {
  constructor(props){
    super(props)
    this.state={
      res: '',
    }
    this.queryAPI = this.queryAPI.bind(this)
  }

  queryAPI(type){
    fetch(`https://data.seattle.gov/resource/tjb6-zsmc.json?$order=checkouts DESC&materialtype=${type}&$limit=10&checkoutyear=2017&checkoutmonth=8`)
    .then((response) => response.json())
    .then((data) => console.log(data))
  }

  render(){
    return(
      <div>
        <h2>SDG</h2>
        <button onClick={() => this.queryAPI('BOOK')}> Books </button>
        <button onClick={() => this.queryAPI('EBOOK')}> Ebooks </button>
        <button onClick={() => this.queryAPI('MAGAZINE')}> Magazines </button>
        <button onClick={() => this.queryAPI('SONG')}> Songs </button>
      </div>
    )
  }
}
