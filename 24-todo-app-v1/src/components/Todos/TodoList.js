import Todo from './Todo'

function TodoList({ todoList, removeTodoHandler }) {
  return (
    <div>
      {!todoList.length && <h3>Todo list is empty</h3>}
      {todoList.map((todo) => (
        <Todo key={todo.id} removeTodoHandler={removeTodoHandler} {...todo} />
      ))}
    </div>
  )
}

export default TodoList
