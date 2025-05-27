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
        <button onClick={increament} className='w-20 bg-amber-200 rounded-2xl p-1'>+</button>
        <button onClick={decreament} className='w-20 bg-amber-200 rounded-2xl p-1'>-</button>
    </div>
  )
}

export default Counter