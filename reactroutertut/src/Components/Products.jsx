import React from 'react'
import {Link, Outlet} from 'react-router-dom'


const Products = () => {
  return (
    <>
    <div>
      <input type ='search' placeholder="search products" />
    </div>
    <nav> 
        <Link to='/products/featured'> Featured</Link>
        <Link to='/products/new'> new </Link>
    </nav>
    <Outlet />
  </>
  )
}

export default Products

