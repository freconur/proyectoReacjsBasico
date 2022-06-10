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