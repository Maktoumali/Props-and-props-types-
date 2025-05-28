import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import Counter from './hooks/Counter'
import FunctionBased from './components/FunctionBased'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      {/* <div className='bg-blue-700 h-15 flex items-center justify-evenly'>
        <h1>Heading</h1>
        <ul className='flex justify-evenly w-80 '>
          <li className='transition delay-105 duration-300 ease hover:text-white cursor-pointer'>home</li>
          <li className='nav-links'>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
      </div> */}
      
      <>
      <Counter></Counter>
      <FunctionBased></FunctionBased>
      </>
    </>
  )
}


export default App
