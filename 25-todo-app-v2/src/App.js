import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'
import './App.css'

function App() {
  const [todos, setTodo] = useState([])

  const addTodoHandler = (todo) => {
    const newTodo = {
      text: todo,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodo([...todos, newTodo])
  }

  function removeTodoHandler(id) {
    setTodo(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    const tempTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
    )
    setTodo(tempTodo)
  }

  const clearCompletedTodoHandler = () => {
    console.log('123')
    setTodo(todos.filter((todo) => !todo.isCompleted))
  }

  const resetTodosHandler = () => {
    setTodo([])
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodoExist={!!completedTodosCount}
          clearCompletedTodo={clearCompletedTodoHandler}
          resetTodos={resetTodosHandler}
        />
      )}
      <TodoList
        removeTodo={removeTodoHandler}
        toggleTodo={toggleTodoHandler}
        todoList={todos}
      />
      {completedTodosCount > 0 && (
        <h2>
          You have completed {completedTodosCount}{' '}
          {completedTodosCount > 1 ? 'todos' : 'todo'}!
        </h2>
      )}
    </div>
  )
}

export default App
