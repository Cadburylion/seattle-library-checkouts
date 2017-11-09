import React from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './style.scss'

let QuantitySlider = (props) => (
  <div className='slider-container'>
    <Slider
      min={5}
      max={100}
      tooltip={false}
      value={props.quantity}
      orientation='horizontal'
      onChange={props.handleChange}
    />

  </div>
)

export default QuantitySlider
