import { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Components/Home'
import { About } from './Components/About'
import Navbar from './Components/Navbar'
import OrderSummary from './Components/OrderSummary'
import NoMatch from './Components/NoMatch'
import Products from './Components/Products'
import NewProducts from './Components/NewProducts'
import FeaturedProducts from './Components/FeaturedProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={ <OrderSummary />} />
        <Route path='products' element={ <Products />}>
            <Route path='featured' element={<FeaturedProducts />} />
            <Route path='New' element={<NewProducts /> } />
            
            
          </Route> 
        <Route path='*' element={<NoMatch />} />

      </Routes>
    </>
  )
}

export default App
