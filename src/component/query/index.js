import React, {Component} from 'react'
import QuantitySlider from '../slider/index.js'
import './style.css'

export default class Query extends Component {
  constructor(props){
    super(props)
    this.state={
      checkouts: null,
      type: '',
      month: '1',
      year: '2017',
      fetching: false,
      quantity: 10,
    }
    this.queryAPI = this.queryAPI.bind(this)
    this.typeSelect = this.typeSelect.bind(this)
    this.yearSelect = this.yearSelect.bind(this)
    this.monthSelect = this.monthSelect.bind(this)
    this.quantitySelect = this.quantitySelect.bind(this)
  }

  queryAPI(){
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

  typeSelect(e){
    this.setState({
      type: e.target.value,
    })
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

  render(){
    // <button onClick={() => this.queryAPI('BOOK')}> Books </button>
    // <button onClick={() => this.queryAPI('EBOOK')}> Ebooks </button>
    // <button onClick={() => this.queryAPI('MAGAZINE')}> Magazines </button>
    // <button onClick={() => this.queryAPI('SONG')}> Songs </button>

  //   <label htmlFor='book'>Book</label>
  //   <input type='checkbox' name='book' value='BOOK' onClick={this.typeSelect}/>
  //
  //   <label htmlFor='ebook'>Ebook</label>
  //   <input type='checkbox' name='ebook' value='EBOOK' onClick={this.typeSelect}/>
  //
  //   <label htmlFor='magazine'>Magazine</label>
  //   <input type='checkbox' name='magazine' value='MAGAZINE' onClick={this.typeSelect}/>
  //
  //   <label htmlFor='song'>Song</label>
  //   <input type='checkbox' name='song' value='SONG' onClick={this.typeSelect}/>
  
    console.log('query state: ', this.state)
    return(
      <div>

        <button onClick={this.queryAPI}> Search </button>
        <form>

          <div className='type-container'>
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
