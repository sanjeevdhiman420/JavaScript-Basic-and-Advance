import React from 'react'
import TodoItem from './TodoItem';
const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center'>Todos list</h3>
      {props.todos.lenght===0? " no todos to dispay": props.todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sno}  onDelete={props.onDelete}/>
    })
    }
      
  
      
    </div>
  )
}

export default Todos

