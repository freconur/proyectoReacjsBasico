import React from 'react'

const TodoCount = (props) => {
    const { completedTodos, totalTodos} = props
  return (
    <div>
        <h1>Llevas {completedTodos} completados de {totalTodos} Todos</h1>
    </div>
  )
}

export default TodoCount