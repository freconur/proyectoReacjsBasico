import React from 'react'
import TodoCount from "../TodoCount";
import TodoItem from "../TodoItem";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";
const AppUI = ({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    onComplete,
    onDelete,
    loading,
    error
}) => {
  return (
    <React.Fragment >
      <div className="container">
      <TodoCount 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      />
      {loading && <p>cargando</p>}
      {error && <p>ocurrio un error</p>}
      {(!loading && !searchedTodos.length) && <p>crea tu primer todo</p> }
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(item => (
          <TodoItem 
          item={item}
          completed={item.completed}
          onComplete={()=> onComplete(item.text)}
          onDelete={()=> onDelete(item.text)}
          />
        ))}
      </TodoList>
      </div>
    </React.Fragment>
  )
}

export default AppUI