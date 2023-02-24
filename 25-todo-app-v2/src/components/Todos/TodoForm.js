import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  const [inputText, setInputText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(inputText)
    setInputText('')
  }

  return (
    <div className={styles.todoForm}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new Todo"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
