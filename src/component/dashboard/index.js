import React, {Component} from 'react'
import Query from '../query/index.js'

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    return(
      <div>
        <h1>Soli Deo Gloria</h1>
        <Query />
      </div>
    )
  }
}
