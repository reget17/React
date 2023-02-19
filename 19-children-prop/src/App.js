import './App.css'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className="App">
      <Wrapper color="red">
        <h2>Text inside of the Wrapper</h2>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Another Text inside of the Wrapper</h2>
      </Wrapper>
    </div>
  )
}

export default App
