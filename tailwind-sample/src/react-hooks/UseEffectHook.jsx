import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
      let timer = setTimeout(()=>{
            setCount((prev)=> prev+1)
        },1000)

        return()=> clearTimeout(timer)

    },[count])

    return (
        <div>
           <p>i have rendered {count} times</p> 
        </div>
    )
}

export default UseEffectHook