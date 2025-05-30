// import { useState } from 'react'
import './App.css'
import './style.css'
// import Counter from './hooks/Counter'
// import FunctionBased from './components/FunctionBased'
// import ConditionalRendering from './components/conditionalRendering'
// import TernaryOperator from './components/TernaryOperator'
// import List from './listAndKeys/List'
// import Keys from './listAndKeys/Keys'
// import Props from './PropsAndTypes/Props'
// import ObjectProps from './PropsAndTypes/ObjectProps'
// import DestructuringProps from './PropsAndTypes/DestructuringProps'
import NewPropComponent from './PropsAndTypes/NewPropComponent'
import DefaultComponent from './PropsAndTypes/DefaultComponent'


function App() {
  // const [count, setCount] = useState(0)

  const car ={
    make:'vw',
    brand:'volkwagen',
    model:2022,
  }

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
      {/* <Counter></Counter>
      <FunctionBased></FunctionBased>
      <ConditionalRendering></ConditionalRendering>
      <TernaryOperator></TernaryOperator>
      <List></List> */}
      {/* <Keys></Keys> */}

      {/* <Props fname='john' lastName='doe' age={29}></Props> */}

      {/* <ObjectProps cars={car}></ObjectProps> */}

      {/* <DestructuringProps fname='john' lname='doe' age={20}></DestructuringProps> */}

      {/* <NewPropComponent fname='john doe' age={30}></NewPropComponent> */}

      <DefaultComponent fname='john'/>
      </>
    </>
  )
}


export default App
