import React, { useState } from 'react'
import "../style/TodoData.css"
import { useDispatch, useSelector } from 'react-redux'
import { deleting } from '../redux/todoslice/todoslice'

const TodoData = () => {
  const [checking,setChecking]=useState([])
  const datas=useSelector(state=>state.todo.tododata)
  // console.log(datas)
  const dispatch=useDispatch()

  const handleDelete=(d)=>{
    dispatch(deleting(d))

  }

  const handleCheck=(ind)=>{
   const checks=[...checking];
   checks[ind]= !checks[ind];
   setChecking(checks);
    
  }
  return (
    <>
    <div className='todoData'>
        <h5>Todo Data</h5>
        <table className='table table-dark table-striped table-hover' style={{textAlign:'center'}}>
          <thead>
          <tr>
            <th>Check</th>
            <th>Task</th>
            <th>Delete</th>
          </tr>
          </thead>
         
            {
             datas && datas.map((val,i)=>(
                <tbody key={i}>
                <tr>
                <td><input type='checkbox' onClick={()=>handleCheck(i)} className='form-check-input'/></td>
                <td style={{textDecorationColor:'red', textDecorationLine:checking[i] ? ' line-through':'none',textDecorationThickness:'2px'}}>{val.todoinp}</td> 
                <td><button className='btn btn-danger' onClick={()=>handleDelete(val)}>Delete</button></td>
                </tr>
                </tbody>
              ))
            }

      
        </table>

    </div>
    
    
    </>
  )
}

export default TodoData