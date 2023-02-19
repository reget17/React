import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

const texts = ['Click me', 'Click me pls', 'Hit me', 'Press me']

function App() {
  const [count, setCount] = useState(0)

  const setCounter = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button onClick={setCounter} text={text} key={index} />
      })}
    </div>
  )
}

export default App
