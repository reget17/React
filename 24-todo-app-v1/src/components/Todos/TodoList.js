import Todo from './Todo'

function TodoList({ todoList, removeTodoHandler }) {
  return todoList.map((todo) => {
    return (
      <Todo key={todo.id} removeTodoHandler={removeTodoHandler} {...todo} />
    )
  })
}

export default TodoList
