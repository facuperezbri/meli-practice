import React from 'react'
import creditCard from '../assets/home-carrousel-logos/credit-card.svg'
import debitCard from '../assets/home-carrousel-logos/debit-card.svg'
import mercadoCredit from '../assets/home-carrousel-logos/mercado-creditsv2.svg'
import efectivo from '../assets/home-carrousel-logos/payment-agreement.svg'
import more from '../assets/home-carrousel-logos/view-more.svg'

const HomePayments = () => {
  return (
    <div className='flex justify-between items-center bg-white w-[1200px] rounded-md px-[15px] py-[20px] shadow-sm'>
      <div className='flex gap-3'>
        <img src={creditCard} alt='Credit card' />
        <div>
          <p className='text-[18px] font-medium'>Tarjeta de crédito</p>
          <p className='text-[14px] text-[#3483FA]'>Ver promociones bancarias</p>
        </div>
      </div>
      <div className='flex gap-3'>
        <img src={debitCard} alt='Debit card' />
        <div>
          <p className='text-[18px] font-medium'>Tarjeta de débito</p>
          <p className='text-[14px] text-[#3483FA]'>Ver más</p>
        </div>
      </div>
      <div className='flex gap-3'>
        <img src={mercadoCredit} alt='Credit card' />
        <div>
          <p className='text-[18px] font-medium'>Cuotas sin tarjeta </p>
          <p className='text-[14px] text-[#3483FA]'>Conocé Mercado Crédito</p>
        </div>
      </div>
      <div className='flex gap-3'>
        <img src={efectivo} alt='Credit card' />
        <div>
          <p className='text-[18px] font-medium'>Efectivo</p>
          <p className='text-[14px] text-[#3483FA]'>Ver más</p>
        </div>
      </div>
      <div className='flex gap-3'>
        <img src={more} alt='Credit card' />
      </div>
    </div>
  )
}

export default HomePayments