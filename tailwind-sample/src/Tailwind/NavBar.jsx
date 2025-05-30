import React from 'react'

const NavBar = () => {
  return (
    <>
        <header>
            <nav className='w-sxl h-15 bg-sky-400 flex items-center justify-evenly'>
                <h2>Auto Mobile</h2>    
                <ul className=' w-220 h-15 flex justify-evenly items-center text-white'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                    <li className=' w-60 flex justify-end'><a href="" className='h-8 w-40 bg-slate-700 flex items-center justify-center rounded-sm text-white'>Get Premium</a></li>
                </ul>
            </nav>    
        </header>    
    </>
  )
}

export default NavBar