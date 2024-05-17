import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import useTodoViewModel from './viewmodels/TodoViewModel'



function App() {
  const { todos, addTodo, removeTodo } = useTodoViewModel();

  return (
  
    <div className="app">
       <h1>Todo App</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </div>
  )
}

export default App
