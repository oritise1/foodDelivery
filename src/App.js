import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import SignUp from './Pages/SignUp'

const App = () => {

  return (
    <div className='.App'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App