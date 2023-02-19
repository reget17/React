import { useState } from 'react'

function Login() {
  // const [userName, setUserName] = useState('')
  // const [password, setPassword] = useState('')

  const [data, setData] = useState({ username: '', password: '' })

  function handleFormSubmit(event) {
    event.preventDefault()
    alert(JSON.stringify(data))
  }

  function handleInputChange(text, name) {
    setData({ ...data, [name]: text })
  }

  return (
    <>
      <h1>Login Form:</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e.target.value, 'username')}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => handleInputChange(e.target.value, 'password')}
            value={data.password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
