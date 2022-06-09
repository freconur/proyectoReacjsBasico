import React,{ useState } from "react";
import TodoCount from "../TodoCount";
import TodoItem from "../TodoItem";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";
import './App.css'
const App = () => {
  const arrayTodo = [
    {
      text: "50km en bicicleta",
      completed: false
    },
    {
      text: "sacar al parque a rufus",
      completed: true
    },
    {
      text: "completar los cursos de REACTJS",
      completed: true
    },
    {
      text: "terminar el curso de ingles",
      completed: true
    },
  ]
  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState(arrayTodo)

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let  searchedTodos = []

  if(!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText)
    })
  }

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
          />
        ))}
      </TodoList>
      </div>
    </React.Fragment>
  );
};

export default App;
