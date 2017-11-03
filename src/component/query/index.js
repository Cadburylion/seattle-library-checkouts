import React, {Component} from 'react'
import './style.css'

export default class Query extends Component {
  constructor(props){
    super(props)
    this.state={
      checkouts: null,
    }
    this.queryAPI = this.queryAPI.bind(this)
  }

  queryAPI(type){
    fetch(`https://data.seattle.gov/resource/tjb6-zsmc.json?$order=checkouts DESC&materialtype=${type}&$limit=10&checkoutyear=2017&checkoutmonth=8`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        checkouts: data
      })
    })
  }

  render(){
    console.log('query state: ', this.state)
    return(
      <div>
        <button onClick={() => this.queryAPI('BOOK')}> Books </button>
        <button onClick={() => this.queryAPI('EBOOK')}> Ebooks </button>
        <button onClick={() => this.queryAPI('MAGAZINE')}> Magazines </button>
        <button onClick={() => this.queryAPI('SONG')}> Songs </button>

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
