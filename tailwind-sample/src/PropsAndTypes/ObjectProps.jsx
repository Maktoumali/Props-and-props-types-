import React from 'react'

const ObjectProps = (props) => {
  return (
    <div>
        <ul>
            <li>{props.cars.make}</li>
            <li>{props.cars.model}</li>
            <li>{props.cars.brand}</li>
        </ul>
    </div>
  )
}

export default ObjectProps