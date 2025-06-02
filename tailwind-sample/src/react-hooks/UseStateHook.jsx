import React, { useEffect, useState } from 'react'

const UseStateHook = () => {
    const [car, setCar] = useState({
        brand: 'vw',
        make: 'taigun',
        model: 2022,
        color: 'red'
    })

    const [popUp, setPopUp] = useState(false)

    const handleColor = () => {
        setCar(prev => {
            return { ...prev, color: 'blue' }
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setPopUp(true)
        }, 1000)
    }, [])

    function handleClosing() {
        setPopUp(false)
    }

    function handleBuy(){
        alert('congratulation! you have bought a used vw taigun for 1 cr')
    }


    return (
        <>
        <div onClick={handleClosing} className='h-158 w-mx'>
            <p>i have a {car.brand} {car.make} , i bought the {car.color} color {car.make} in {car.model} , </p>
            <button onClick={handleColor}>Change the color</button>


            {popUp && (
                <div className='w-mx h-100 flex items-center justify-center ' >
                    <div className='h-40 w-100 bg-black rounded-sm flex items-center flex-col justify-center shadow-2xl text-white transition duration-200 delay-205 ease-in-out fixed'>
                        <button className='relative left-45 bottom-3 cursor-pointer text-white ' onClick={handleClosing}>X</button>
                        <p>do you want to buy this car ?</p>

                        <button onClick={handleBuy} className='w-20 h-7 m-5 bg-sky-900 rounded-sm cursor-pointer transition duration-200 ease-in-out hover:bg-sky-950'>yes</button>
                    </div>
                </div>
            )}

        </div>

        </>
    )
}

export default UseStateHook