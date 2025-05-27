import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount] = useState(0)

    const increament=()=>{
        setCount((prev)=> prev + 1)
    }
     const decreament=()=>{
        setCount((prev)=> prev - 1)
    }
  return (
    <div>
        {count}
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>
    </div>
  )
}

export default Counter