import React,{ useState } from "react";
import './App.css'
import AppUI from "./AppUI";

const useLocalStorage = () => {
  const localStorageTodos = localStorage.getItem('TODO_V1')
  let arrayLocalStorage;
  if(!localStorageTodos) {
    localStorage.setItem('TODO_V1', JSON.stringify([]))
    arrayLocalStorage = []
  }else {
    arrayLocalStorage = JSON.parse(localStorageTodos)
  }
}

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState(arrayLocalStorage)

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

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem("TODO_V1",stringifiedTodos)
    setTodos(newTodos)
  }
  const onComplete = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos[indexTodo].completed = true
    saveTodos(newTodos);
  }
  const onDelete = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(indexTodo, 1)
    saveTodos(newTodos)
  }
  return (
    <AppUI
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    onComplete={onComplete}
    onDelete={onDelete}
    />
  );
};

export default App;
