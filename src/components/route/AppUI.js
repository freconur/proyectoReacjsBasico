import React from 'react'
import TodoCount from "../TodoCount";
import TodoItem from "../TodoItem";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";
const AppUI = ({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    onComplete,
    onDelete
}) => {
  return (
    <React.Fragment >
      <div className="container">
      <TodoCount 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {loading && <p>estamos cargando</p>}
        {error && <p>hubo un error</p>}
        {(!loading && !searchedTodos.length) && <p>Creaste tu primer todo</p>}
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