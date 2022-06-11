import React, { createContext } from 'react'

const TodoContext = React.createContext(); // el context es un objeto
// const { provider, consumer} = createContext()
//pero utilizaremos sus propiedadaes directamente
//el provider lo utilizaremos para contener al componente padre.
<TodoContext.Provider></TodoContext.Provider>
<TodoContext.Consumer></TodoContext.Consumer>
