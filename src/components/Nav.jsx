import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { FiBell, FiShoppingCart } from 'react-icons/fi'
import logo from '../assets/logo_large.png'
import disney from '../assets/disney.webp'
import { navbarMiddle } from '../constants'
import { useNavigate, Link } from 'react-router-dom'

const Nav = ({ searchProducts }) => {
  const navigate = useNavigate()

  const [state, setState] = useState("")

  function handleChange (e) {
    setState(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    navigate(`/items/?search=${state}`)
  }

  function cleanLogo () {
    setState("")
  }

  return (
    <header className='flex flex-col items-center justify-center bg-[#FFF159] shadow-sm'>
      <nav className='flex justify-between items-center w-full p-2 gap-16 max-w-[1200px]'>
        <Link to='/'>
          <img onClick={cleanLogo} className='max-h-[34px] max-w-[134px] object-contain' src={logo} alt='MercadoLibre Logo' />
        </Link>
        <form className='flex flex-1 justify-between max-w-[600px] bg-white h-fit rounded-sm shadow-md p-1 gap-2' onSubmit={handleSubmit}>
          <input className='flex-1 bg-transparent p-1' type='text' name='query' id='query' placeholder='Buscar productos, marcas y más...' onChange={handleChange} value={state} />
          <button type='submit'><BsSearch /></button>
        </form>
        <img className='max-h-[39px] object-contain' src={disney} alt='MercadoLibre Logo' />
      </nav>
      <div className='flex justify-between items-center w-full p-2 gap-2 max-w-[1200px]'>

        <div>
          <ul className='flex items-baseline gap-[18px] text-[14px] font-extralight'>
            <li className='flex items-center mr-[65px]'>
              <IoLocationOutline size={22} />
              <div className='leading-none'>
                <p className='font-thin text-[12px]'>Enviar a Facundo</p>
                <p className='font-light text-[14px]'>Álzaga 5130</p>
              </div>
            </li>
            {
              navbarMiddle.map((n, i) =>
                <li key={i}>{n.title}</li>
              )
            }
          </ul>
        </div>
        <div>
          <ul className='flex items-baseline gap-[12px] text-[14px] font-light'>
            <li>Facundo</li>
            <li>Mis compras</li>
            <li>Favoritos</li>
            <li><FiBell size={20} /></li>
            <li><FiShoppingCart size={20} /></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Nav