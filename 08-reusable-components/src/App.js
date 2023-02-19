import './App.css'
import MyComponent from './components/MyComponent'
import OtherComponent from './components/OtherComponent'

function App() {
  return (
    <div className="App">
      <MyComponent />
      <OtherComponent parameters={'Test Test'} />
      <MyComponent />
    </div>
  )
}

export default App
