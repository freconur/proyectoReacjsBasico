import React from 'react'
import './styles/todoList.css'
const TodoList = (props) => {
  return (
    <div>
        <ul className='ul_container'>
        {props.children}
        </ul>
    </div>
  )
}

export default TodoList