import React,{ useState, useEffect } from "react";
import './App.css'
import AppUI from "./AppUI";

const useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue)
  useEffect(() => {
    setTimeout(() => {
     try {
      const localStorageItem = localStorage.getItem(itemName)
      let parseItem;
      if(!localStorageItem) {
        localStorage.setItem(itemName, initialValue)
        parseItem = initialValue 
      }else {
        parseItem = JSON.parse(localStorageItem)
      }
      setItem(parseItem)
      setLoading(false)
     } catch(error) {
        setError(error)
     }
    }, 1000)
  })
  
  const saveItem = (newItem) => {
  try{
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName,stringifiedItem)
      setItem(newItem)
  }catch(error) {
    setError(error)
  }
}
  return {  
    item,
    saveItem,
    loading,
    error
  }
}

const App = () => {
  
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')
  
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
    loading={loading}
    error={error}
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
