import React from 'react'
import { useNavigate } from 'react-router-dom'

import './login.css'
const Login = () => {
    const navigate = useNavigate()

  return (
    <div className='LoginWrapper'>
        <div className='LeftWrapper'>
            jjjjjjjjj
        </div>
        <div className='RightWrapper'>
            <h1>Welcome Back!</h1>
            <button className='loginBtn' onClick={() => navigate('/dashboard')}>
                LOGIN
            </button>
        </div>
    </div>
  )
}

export default Login