import React from 'react'

const DestructuringProps = ({fname,lname,age}) => {
  return (
    <div>
        <ul>
            <li>{fname}</li>
            <li>{lname}</li>
            <li>{age}</li>
        </ul>
    </div>
  )
}

export default DestructuringProps