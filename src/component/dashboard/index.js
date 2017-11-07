import React, {Component} from 'react'
import Query from '../query/index.js'
import './style.css'

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    return(
      <main>
        <h1>Seattle Reads</h1>
        <Query />
      </main>
    )
  }
}
