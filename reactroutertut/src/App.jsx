import { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Components/Home'
import { About } from './Components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
