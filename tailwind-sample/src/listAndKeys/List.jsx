import React from 'react'

const List = () => {
    const arr = ['BWM','VW','Audi','Nissan']
  return (
    <div>
        {arr.map((cars)=>(
            <>
            <p>{cars}</p>
            </>
        ))}        
    </div>
  )
}

export default List