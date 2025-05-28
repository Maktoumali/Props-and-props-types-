import React, { useEffect, useState } from 'react'

const FunctionBased = () => {
    const [words, setWords] = useState('')
    const [display, setDisplay] = useState('')
    const displayWord = () => {
        setWords('Hello world')
    }

    useEffect(() => {
        setTimeout(() => {
            setDisplay('Content is Displayed here')
        }, 1500)
    }, [display])
    return (
        <div>
            {words && <div className='w-30 text-center bg-sky-300 transition-all delay-100 duration-150 ease-in'>{words}</div>}
            <button onClick={displayWord} className='w-20 bg-sky-400 h-10 rounded-xl'>click</button>
            <div className='w-100 h-40 bg-gray-800 rounded-sm flex justify-evenly items-center'>
                {display ? (
                    <div className='text-amber-50'>{display}</div>
                ) : (
                    <div className='w-85 h-40 bg-gray-800 flex animate-pulse'>
                        <div className='w-25 h-40 bg-gray-800 flex items-center'>
                            <div className='w-15 h-15 rounded-4xl bg-gray-700'></div>
                        </div>

                        <div className='w-55 h-40 bg-gray-800 flex flex-col justify-evenly'>
                            <div class="h-2 rounded bg-gray-700"></div>
                            <div class="grid grid-cols-3 gap-4">
                                <div class="col-span-2 h-2 rounded bg-gray-700"></div>
                                <div class="col-span-1 h-2 rounded bg-gray-700"></div>
                            </div>


                        </div>
                    </div>
                )

                }


            </div>
        </div>
    )
}

export default FunctionBased