import React from 'react'
import './style.css'

let CheckoutTypeButton = (props) => (
  <div className={props.typeSelected ? `btn ${props.classType} selected` : `btn ${props.classType}`}
    onClick={() => props.handleSelect(props.classType, props.materialType)}>
    {props.buttonName}
  </div>
)

export default CheckoutTypeButton
