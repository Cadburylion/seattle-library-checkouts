import React, {Component} from 'react'
import Query from '../query/index.js'
import Loader from '../loader/index.js'
import './style.scss'

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    return(
      <main>
        <h1 className='app-title'>
          <span className='title-first'>Seattle</span>
          <span className='title-second'>Reads</span>
          <span>

            <Loader />

          
          </span>
        </h1>
        <div className='title-space'></div>
        <Query />
      </main>
    )
  }
}
