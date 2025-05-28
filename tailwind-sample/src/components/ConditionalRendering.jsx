import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [islogged,SetIslogged] = useState(true)
  return (
    <div>
        {islogged && <div>The user is Logged in </div>}
    </div>
  )
}

export default ConditionalRendering