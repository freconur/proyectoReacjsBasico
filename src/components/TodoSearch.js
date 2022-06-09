import React from 'react'

const TodoSearch = ({searchValue,setSearchValue}) => {
// const [search, setSearch] = useState('')
const onSearch = (evento) => {
    setSearchValue(evento.target.value)
}
  return (
    <div>
        <input 
        name="search"
        type="text"
        value={searchValue}
        placeholder="busqueda"
        onChange={onSearch}
        />
        <p>{searchValue}</p>
    </div>
  )
}

export default TodoSearch