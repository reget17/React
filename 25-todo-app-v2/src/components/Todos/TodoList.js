import Todo from './Todo'

function TodoList({ todoList, removeTodo, toggleTodo }) {
  return (
    <div>
      {!todoList.length && <h3>Todo list is empty</h3>}
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          todo={todo}
        />
      ))}
    </div>
  )
}

export default TodoList
