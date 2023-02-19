import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todos, setTodo] = useState([])

  const addTodoHandler = (todo) => {
    let allTodos = []
    allTodos.push(...todos, { id: todos.length + 1, text: todo })
    setTodo(allTodos)
  }

  function removeTodoHandler(id) {
    console.log('Enter to removeHandler', id)
    let tempListTodos = todos.filter((x) => x.id !== id)
    console.log(tempListTodos)
    setTodo(tempListTodos)
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList removeTodoHandler={removeTodoHandler} todoList={todos} />
    </div>
  )
}

export default App
