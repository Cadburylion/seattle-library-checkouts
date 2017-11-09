import React from 'react'
import './style.css'

let CheckoutTypeButton = (props) => (
  <div
    className={props.typeSelected ? `btn ${props.classType} cursive selected` : `btn ${props.classType} cursive`}
    onClick={() => props.handleSelect(props.classType, props.materialType)}>
    {props.buttonName}
  </div>
)

export default CheckoutTypeButton
