import { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Components/Home'
import { About } from './Components/About'
import Navbar from './Components/Navbar'
import OrderSummary from './Components/OrderSummary'
import NoMatch from './Components/NoMatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={ <OrderSummary />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
