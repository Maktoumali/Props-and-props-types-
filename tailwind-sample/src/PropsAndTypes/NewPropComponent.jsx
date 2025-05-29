import React from 'react'
import PropTypes from 'prop-types'
const NewPropComponent = ({ fname,age }) => {
    return (
        <div>
            <ul>
                <li>{fname}</li>
                <li>{age}</li>
            </ul>
        </div>
    )
}

NewPropComponent.propTypes = {
    fname: PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
}

export default NewPropComponent