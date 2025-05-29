import React from 'react'

const Props = (props) => {
  return (
    <div>
        <ul>
            <li>{props.fname}</li>
            <li>{props.lastName}</li>
            <li>{props.age}</li>
        </ul>
    </div>
  )
}

export default Props