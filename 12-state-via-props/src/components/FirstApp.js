import SecondApp from './SecondApp'

function FirstApp({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>FIRST APP</button>
      <SecondApp onClick={onClick} />
    </div>
  )
}

export default FirstApp
