import React, { useState } from 'react'
import '../style/TodoForm.css'
import { useDispatch } from 'react-redux'
import { adding } from '../redux/todoslice/todoslice'

const TodoForm = () => {
    const initialform={
        todoinp:''
    }
    const [formdata,setFormData]=useState(initialform)
    const dispatch=useDispatch()

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData(prev=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
    
        dispatch(adding(formdata))
        setFormData(initialform)

    }
    return (
        <>
            <div className='form_container'>
                <form onSubmit={handleSubmit}>

                    <input type='text' name='todoinp' value={formdata.todoinp} onChange={handleChange} className='form-control' placeholder='Enter a new Todo' />
                    <button className='btn btn-danger my-2 w-100'>Add</button>


                </form>
            </div>


        </>
    )
}

export default TodoForm