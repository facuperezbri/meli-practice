import axios from 'axios';
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import ProductDetail from './components/ProductDetail';
import Products from './components/Products'

const App = () => {
  const [products, setProducts] = useState([]);

  async function searchProducts (product) {
    let data = await axios.get(`http://localhost:3001/?name=${product}`)
    setProducts(data.data)
  }

  return (
    <div className='bg-[#EBEBEB] h-full min-h-[100vh]'>
      <Nav searchProducts={searchProducts} />
      <Routes>
        <Route path='/' element={<Products products={products} />} />
        <Route path=':id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App