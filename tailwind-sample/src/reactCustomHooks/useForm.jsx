import React, { useState } from 'react'

const useForm = (initialValue) => {
    const [val, setVal] = useState(initialValue)

    const handleChange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value })
    }

    return { val, handleChange }
}

export default useForm