import React from 'react'
import payment from '../assets/footer/payment.svg'
import shipping from '../assets/footer/shipping.svg'
import protectedLogo from '../assets/footer/protected.svg'

const FooterHome = () => {
  return (
    <footer className='flex flex-col w-full bg-white items-center p-[40px]'>
      <div className='flex'>
        <div className='flex flex-col items-center justify-center w-[400px] h-[242px] px-[45px] pt-[35px] pb-[20px]'>
          <img src={payment} alt='Payment' />
          <p className='text-[20px] text-[#4b4b4b] mt-[16px]'>Elegí cómo pagar</p>
          <p className='text-[15px] text-[#999999] mt-[4px] mb-[10px] text-center'>Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.</p>
          <a href='https://www.mercadopago.com.ar/c/pagar-online-con-mercadopago' className='text-[14px] text-[#3483fa]'>Cómo pagar tus compras</a>
        </div>

        <div className='flex flex-col items-center justify-center w-[400px] h-[242px] px-[45px] pt-[35px] pb-[20px]'>
          <img src={shipping} alt='Shipping' />
          <p className='text-[20px] text-[#4b4b4b] mt-[16px]'>Envío gratis desde $ 5.500</p>
          <p className='text-[15px] text-[#999999] mt-[4px] mb-[10px] text-center'>Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.</p>
          <a href='https://www.mercadolibre.com.ar/l/mercado-puntos-beneficios' className='text-[14px] text-[#3483fa]'>Conocé más sobre este beneficio</a>
        </div>

        <div className='flex flex-col items-center justify-center w-[400px] h-[242px] px-[45px] pt-[35px] pb-[20px]'>
          <img src={protectedLogo} alt='Protected' />
          <p className='text-[20px] text-[#4b4b4b] mt-[16px]'>Seguridad de principio a fin</p>
          <p className='text-[15px] text-[#999999] mt-[4px] mb-[10px] text-center'>¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
          <a href='https://www.mercadolibre.com.ar/seguridad' className='text-[14px] text-[#3483fa]'>Cómo te protegemos</a>
        </div>
      </div>

      <div className='flex justify-between w-[1200px] p-[40px]'>
        <div className=' flex flex-col justify-center items-center w-[526px] h-[72px] text-[14px] border-[1px] border-solid border-gray-400 rounded-md p-14'>
          <p>Botón de arrepentimiento</p>
          <a className='text-[#3483FA]' href="">Cancelar una compra</a>
          <a className='text-[#3483FA]' href="">Cancelar una suscripción</a>
          <a className='text-[#3483FA]' href="">Cancelar un seguro o garantía</a>
        </div>
        <div className=' flex flex-col justify-center items-center w-[526px] h-[72px] text-[14px] border-[1px] border-solid border-gray-400 rounded-md p-14'>
          <p>Conocé las normas que aplican cuando comprás</p>
          <a className='text-[#3483FA]' href="">Ver contratos de adhesión - Ley N.º 24.240 de Defensa al Consumidor </a>
        </div>
      </div>

    </footer >
  )
}

export default FooterHome