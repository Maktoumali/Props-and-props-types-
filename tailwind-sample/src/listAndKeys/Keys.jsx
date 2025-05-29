import React from 'react'

const Keys = () => {
    const cars = [
        { id: 1, Make: 'Taigun', model: 2020, image: 'this is an image', maker: 'Volkwagen', price: '20 lakh' },
        { id: 2, Make: 'Sunny', model: 2012, image: 'this is an image', maker: 'Nissan', price: '9 lakh' },
        { id: 3, Make: 'M4 competition', model: 2022, image: 'this is an image', maker: 'BWM', price: '1 cr' },
        { id: 4, Make: 'Swift', model: 2020, image: 'this is an image', maker: 'Maruthi', price: '5 lakh' },
    ]
    function BuyCar(name){
        console.log(name)
        alert(`You just Bought ${name} , congratulation 😃`)
    }
    return (
        <div className='m-2'>
            <div className='flex'>
                {cars.map((item) => (
                    <div key={item.id} className='w-50 h-70 bg-sky-600 m-3 text-white rounded-sm shadow-2xl ring-4 ring-slate-500 transition duration-300 delay-100 ease hover:scale-105'>
                        <div className='w-50 h-20 flex items-center justify-evenly'>
                            <p>{item.image}</p>
                        </div>

                        <div className='w-50 h-15 flex gap-4 items-center justify-center'>
                        <p>{item.maker}</p>
                        <p>{item.Make}</p>
                        </div>
                        <div className='w-50 h-15 flex justify-evenly font-mono text-lg'>
                            <p>{item.price}</p>
                            <div className='w-0.5 h-7 bg-slate-600'></div>
                            <p>{item.model}</p>
                        </div>
                        <div className='w-50 flex justify-center'>
                        <button className='w-20 h-8 bg-slate-600 text-white rounded-sm' onClick={()=>BuyCar(item.Make)}>Buy</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Keys