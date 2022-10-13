import React from 'react'
import Login from './Login/Login'
import NotFound from './NotFound/NotFound'
import Register from './Register/Register'
import { Routes, Route } from 'react-router-dom'

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default index
