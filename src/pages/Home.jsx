import React from 'react'
import Carrousel from '../components/Home'
import HomePayments from '../components/HomePayments'



const Home = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-10'>
      <Carrousel />
      <HomePayments />
    </section>
  )
}

export default Home