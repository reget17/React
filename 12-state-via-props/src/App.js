import { useState } from 'react'
import './App.css'
import FirstApp from './components/FirstApp'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  const setCounter = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Counter count={count} />
      <div>
        <button onClick={setCounter}>APP</button>
        <FirstApp counter={setCounter} />
      </div>
    </div>
  )
}

export default App
