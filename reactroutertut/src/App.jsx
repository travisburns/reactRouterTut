import { Routes, Route} from 'react-router-dom'

import { Home } from './Components/Home'

import { About } from './Components/About'
import Navbar from './Components/Navbar';
import OrderSummary from './Components/OrderSummary'
import NoMatch from './Components/NoMatch';
import Products from './Components/Products';
import FeaturedProducts from './Components/FeaturedProducts';
import NewProducts from './Components/NewProducts';

function App() {
  
  
  return (
    <>
    
    <Navbar />

<Routes>
   <Route path='/' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path="order-summary" element={<OrderSummary /> } /> 
    <Route path="products" element={<Products /> }>
      <Route index element={<FeaturedProducts />} />
      <Route path='featured' element={<FeaturedProducts />} />
      <Route path='new' element={<NewProducts />} />
    </Route>
    



    <Route path='*' element={<NoMatch /> } />
    
</Routes>
    
    </>
  

  );
}


export default App;












































// import { useState } from 'react'
// import {Routes, Route } from 'react-router-dom'
// import './App.css'
// import { Home } from './Components/Home'
// import { About } from './Components/About'
// import Navbar from './Components/Navbar'
// import OrderSummary from './Components/OrderSummary'
// import NoMatch from './Components/NoMatch'
// import Products from './Components/Products'
// import NewProducts from './Components/NewProducts'
// import FeaturedProducts from './Components/FeaturedProducts'
// import Users from './Components/Users'
// import UserDetails from './Components/UserDetails'
// import Admin from './Components/Admin'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='about' element={<About />} />
//         <Route path='order-summary' element={ <OrderSummary />} />
//         <Route path='products' element={ <Products />}>
//           <Route index element={FeaturedProducts}/>
//             <Route path='featured' element={<FeaturedProducts />} />
//             <Route path='New' element={<NewProducts /> } />
            
            
//           </Route> 
//           <Route path='users' element={<Users />}>
//             <Route path=':userId' element={<UserDetails />} />
//             <Route path='admin' element={<Admin />} />
//           </Route>
//         <Route path='*' element={<NoMatch />} />

//       </Routes>
//     </>
//   )
// }

// export default App
