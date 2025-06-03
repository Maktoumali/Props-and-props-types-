import React from 'react'
import useForm from './useForm'

const FormHookUseCase = () => {
    const { val, handleChange } = useForm({ fname: '', lname: '' })
    return (
        <div>
            <input type='text' value={val.fname} name='fname' onChange={handleChange} className='w-50 h-10 border-1' />
            <input type='text' value={val.lname} name='lname' onChange={handleChange} className='w-50 h-10 border-1' />
            <p>{val.fname}</p>
            <p>{val.lname}</p>
        </div>
    )
}

export default FormHookUseCase