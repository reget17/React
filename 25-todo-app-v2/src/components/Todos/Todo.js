import { RiTodoFill, RiDeleteBack2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

function Todo({ todo, removeTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      {console.log(todo.isCompleted)}
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>

      <RiDeleteBack2Line
        onClick={() => removeTodo(todo.id)}
        className={styles.deleteIcon}
      />
      <FaCheck
        onClick={() => toggleTodo(todo.id)}
        className={styles.checkIcon}
      />
    </div>
  )
}

export default Todo
