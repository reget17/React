import { RiTodoFill } from 'react-icons/ri'
import styles from './Todo.module.css'

function Todo({ id, text, removeTodoHandler }) {
  function clickHandler(event) {
    if (event === 2) {
      console.log(id)

      removeTodoHandler(id)
    }
  }

  return (
    <div onClick={(e) => clickHandler(e.detail)} className={styles.todo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
    </div>
  )
}

export default Todo
