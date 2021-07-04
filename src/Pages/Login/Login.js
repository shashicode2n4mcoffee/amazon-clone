import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import AmazonLogo from '../../Amazon_Logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { loginInitiate } from '../../Redux/Action'
import { useEffect } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { user } = useSelector((state) => state.data)
  let dispatch = useDispatch()
  const history = useHistory()

  

  useEffect(() => {
    if (user) {
      history.push('/')
    }
  }, [user, dispatch])

  const signIn = (e) => {
    e.preventDefault()
    dispatch(loginInitiate(email, password))
    setEmail('')
    setPassword('')
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img src={AmazonLogo} alt='Amazon Logo' className='login-logo' />
      </Link>
      <div className='login-container'>
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' onClick={signIn} className='login-signIn'>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice
        </p>
      </div>
      <p>New to Amazon?</p>
      <Link to='/register'>
        <button className='login-register'>Create your Amazon Account</button>
      </Link>
    </div>
  )
}

export default Login
