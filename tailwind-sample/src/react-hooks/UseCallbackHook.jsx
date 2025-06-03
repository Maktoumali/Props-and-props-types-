import React, { useCallback, useState } from 'react'
import Search from './Search'


const UseCallbackHook = () => {

  const newList = ['john', 'doe', 'alex', 'jane']
  const [user, setUser] = useState(newList)
  const handleSearch = useCallback((text) => {
    console.log(user[0])
    const filteredData = newList.filter((prev) => prev.includes(text))
    setUser(filteredData)
  }, [user])

  const Shuffle = () => { 
  for (let i = newList.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [newList[i], newList[j]] = [newList[j], newList[i]]; 
  }  
  return setUser(newList)
};

  return (
    <div>
      <Search onChange={handleSearch}/>
      <button className='w-20 h-10 bg-violet-600 text-white rounded-sm' onClick={Shuffle}>shuffle</button>
      {user.map((users) => (
        <li key={users} className=''>{users}</li>
      ))}
    </div>
  )
}

export default UseCallbackHook