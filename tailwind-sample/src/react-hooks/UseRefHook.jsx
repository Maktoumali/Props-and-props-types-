import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const [val, setVal] = useState(0)
    const ref = useRef(0)
    const inputRef = useRef(null)

    useEffect(() => {
        console.log('Component is Rendered')
        inputRef.current.focus()
    }, [])


    function handleCount() {
        setVal(val + 1)
        ref.current++

        console.log('counter value', val)
        console.log('ref value', ref.current)
    }

    //as you can see ref hook is been able output the data without rendering the entire conponent:
    //if you use useState hook it is gonna render the component each time we click the button
    function handlesubmit(){
        ref.current++
        alert('You have clicked the button '+ref.current +' times')
    }

    return (
        <div>
            <p>{val}</p>
            <button onClick={handleCount}>count</button>
            <input ref={inputRef} className='w-80 h-10 border-1' />



            <button onClick={handlesubmit}>click</button>
        </div>
    )
}

export default UseRefHook