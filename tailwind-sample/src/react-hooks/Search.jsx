import React from 'react'
import { memo } from 'react'
const Search = ({onChange}) => {
    console.log('The search bar is rendered')
  return (
    <div>
        <input type="text" className='h-10 w-70 border-1 p-2 rounded-sm focus:outline-sky-600' 
        placeholder='search' 
        onChange={(e)=>onChange(e.target.value)}  
        />
    </div>
  )
}

export default memo(Search) 