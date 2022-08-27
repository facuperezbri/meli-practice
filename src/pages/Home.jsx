import React from 'react'
import Carrousel from '../components/Home'
import HomePayments from '../components/HomePayments'
import Subscription from '../components/Subscription'



const Home = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-10'>
      <Carrousel />
      <HomePayments />
      <Subscription />
    </section>
  )
}

export default Home