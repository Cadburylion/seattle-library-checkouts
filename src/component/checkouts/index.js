import React from 'react'

let Checkouts = (props) => (
  <ul>
    {props.checkouts.map((item, i) => <li key={i}>{item.title}</li>)}
  </ul>
)

export default Checkouts
