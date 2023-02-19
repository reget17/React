import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import ResetButton from './components/ResetButton'

function App() {
  const [count, setCount] = useState(0)

  const setCounter = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <Counter count={count} />
      <div>
        <Button counter={setCounter} />
        <Button counter={setCounter} />
        <Button counter={setCounter} />
      </div>
      <ResetButton count={count} resetCount={resetCount} />
    </div>
  )
}

export default App
