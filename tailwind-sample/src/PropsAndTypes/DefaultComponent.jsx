import React from 'react'

function DefaultComponent({fname,age=39}) {
  return (
    <div>
        <ul>
            <li>{fname}</li>
            <li>{age}</li>
        </ul>
    </div>
  );
}

export default DefaultComponent