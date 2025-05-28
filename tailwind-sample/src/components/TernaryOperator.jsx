import React, { useState } from 'react'

const TernaryOperator = () => {
    const [isloggedIn,setIsloggedIn] = useState(false)
  return (
    <div>
        {isloggedIn ? ( 
            <>
            <div>This user is logged in </div> 
            <button onClick={()=> setIsloggedIn(false)} className='w-20 h-10 bg-sky-500 font-mono rounded-sm cursor-pointer text-white hover:bg-sky-600 '>logOut</button>
            </>
            ) :( 
            <>
            <div>Not logged in </div>
            <button onClick={()=> setIsloggedIn(true)} className='w-20 h-10 bg-sky-900 font-mono text-white rounded-sm tranistion duration-100 delay-200 ease ring-3 ring-sky-400 hover:bg-sky-950 cursor-pointer '>Login</button>
            </>
            )}
    </div>
  )
}

export default TernaryOperator