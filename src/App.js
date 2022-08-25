import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import Nav from './components/Nav'
import ProductDetail from './components/ProductDetail';
import Products from './components/Products'

const App = () => {
  const [params] = useSearchParams()
  const product = params.get('search') ?? "";
  const [products, setProducts] = useState([]);

  async function searchProducts (product) {
    let data = await axios.get(`http://localhost:3001/?name=${product}`)
    setProducts(data.data)
  }

  useEffect(() => {
    searchProducts(product)
  }, [product])

  return (
    <div className='bg-[#EBEBEB] h-full min-h-[100vh]'>
      <Nav />
      <Routes>
        <Route path='/items' element={<Products products={products} />} />
        <Route path='/items/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App