import React, {Component} from 'react'

export default class Filter extends Component {
  render(){
    return(
      <div className='type-container'>
        <div className={this.props.book ? 'btn book selected' : 'btn book'}
          onClick={() => this.props.handleSelect('book', 'BOOK')}>Book</div>
        <div className={this.props.ebook ? 'btn ebook selected' : 'btn ebook'}
          onClick={() => this.props.handleSelect('ebook', 'EBOOK')}>Ebook</div>
        <div className={this.props.magazine ? 'btn magazine selected' : 'btn magazine'}
          onClick={() => this.props.handleSelect('magazine', 'MAGAZINE')}>Magazine</div>
        <div className={this.props.song ? 'btn song selected' : 'btn song'}
          onClick={() => this.props.handleSelect('song', 'SONG')}>Song</div>

          <select defaultValue={this.props.month} onChange={this.props.monthSelect}>
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

          <select defaultValue={this.props.year} onChange={this.props.yearSelect}>
            <option value='2010'>2010</option>
            <option value='2011'>2011</option>
            <option value='2012'>2012</option>
            <option value='2013'>2013</option>
            <option value='2014'>2014</option>
            <option value='2015'>2015</option>
            <option value='2016'>2016</option>
            <option value='2017' name='default-year'>2017</option>
          </select>
      </div>
    )
  }
}
