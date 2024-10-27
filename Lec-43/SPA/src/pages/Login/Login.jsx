import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const Login = () => {
  return (
    <div style={{border: "2px solid red"}}>
      <div>
        This is login page

        <Button>Login</Button>
      </div>

      <Link to="/register">Haven't registered yet?</Link>
    </div>
  )
}

export default Login