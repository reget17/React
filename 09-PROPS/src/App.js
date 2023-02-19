import './App.css'
import Petinfo from './components/Petinfo'

function App() {
  return (
    <div className="App">
      <Petinfo petname="cat" years={'4'} />
      <Petinfo petname={'dog'} years={'2'} />
    </div>
  )
}

export default App
