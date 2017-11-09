import React from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './style.scss'

let QuantitySlider = (props) => (
  <Slider
    min={5}
    max={100}
    value={props.quantity}
    orientation='horizontal'
    onChange={props.handleChange}
  />
)

export default QuantitySlider
