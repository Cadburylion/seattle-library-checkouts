import React from 'react'
import './style.scss'

let CheckoutTypeButton = (props) => (
  <div
    className={`material-type-button ${props.classType} ${props.typeSelected ? 'selected' : ''}`}
    onClick={() => props.handleSelect(props.classType, props.materialType)}>
    {props.buttonName}
  </div>
)

export default CheckoutTypeButton
