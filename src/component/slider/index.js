import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

export default class QuantitySlider extends Component {
  render() {
    return (
      <Slider
        min={5}
        max={100}
        value={this.props.quantity}
        orientation='horizontal'
        onChange={this.props.handleChange}
      />
    )
  }
}
