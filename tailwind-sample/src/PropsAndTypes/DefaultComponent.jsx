import React from 'react'

function DefaultComponent(props) {
  return (
    <div>
        <ul>
            <li>{props.fname}</li>
            <li>{props.age}</li>
        </ul>
    </div>
  );
}

DefaultComponent.defaultProps = {
  fname: 'John',
  age: 39,
};

export default DefaultComponent