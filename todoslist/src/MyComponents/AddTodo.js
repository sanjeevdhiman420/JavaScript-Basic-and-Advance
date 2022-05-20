import React, { useState } from 'react'

const AddTodo = (props) => {
const [title, setTitle]= useState("");
const [desc, setDesc]= useState("");
  const submit = (e) =>{
e.preventDefault();
if(!title || !desc){
    alert("fill the field");
}
props.addTodo(title, desc);
  }
  return (
    <div className='container my-3'>
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
            <div className='mb-3'>
                <label for="title" className='form-label'>Todo Title</label>
                <input type="text" value={title}         className='form-label' id='title'  onChange={(e)=>{
                    setTitle(e.target.value)
                }}/>
            </div>
            <div className='mb-3'>
                <label for="title" className='form-label'>Todo Desc</label>
                <input type="text" value={desc} className='form-label' id='desc' onChange={(e)=>{
                    setDesc(e.target.value)
                }}/>
            </div>
            <button type='submit' className='btn btn-sm btn-success'>Add  todo</button>
        </form>
    </div>
  )
}

export default AddTodo
