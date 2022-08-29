import React from 'react'
import payment from '../assets/footer/payment.svg'
import shipping from '../assets/footer/shipping.svg'
import protectedLogo from '../assets/footer/protected.svg'
import ssnlogo from '../assets/footer/ssnlogo.svg'
import banner from '../assets/footer/banner_usuarios_financieros.svg'
import data from '../assets/footer/data-fiscal-6dc7613071.png'
import Footer from './Footer'

const FooterHome = () => {
  return (
    <section className='flex flex-col w-full bg-white items-center pt-[40px]'>
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
        <div className=' flex flex-col justify-center items-center w-[526px] h-[72px] text-[14px] border-[1px] border-solid border-[#E5E5E5] rounded-md py-14 leading-4  '>
          <p className='text-[#898989]'>Botón de arrepentimiento</p>
          <a className='text-[#3483FA]' href="https://www.mercadolibre.com.ar/ayuda/como-cancelo-una-compra_15861#c_id=/home/regret&c_uid=70cbd243-4f07-4684-81c9-280d244a0bdc">Cancelar una compra</a>
          <a className='text-[#3483FA]' href="https://www.mercadolibre.com.ar/suscripciones#c_id=/home/regret&c_uid=dd105006-8651-425b-af4d-3d1a93d6ab4a">Cancelar una suscripción</a>
          <a className='text-[#3483FA]' href="https://www.mercadolibre.com.ar/ayuda/23440#c_id=/home/regret&c_uid=d83ecec9-29ce-44b6-a448-b653f55d7cbe">Cancelar un seguro o garantía</a>
        </div>
        <div className=' flex flex-col justify-center items-center w-[526px] h-[72px] text-[14px] border-[1px] border-solid border-[#E5E5E5] rounded-md py-14 leading-4'>
          <p className='text-[#898989]'>Conocé las normas que aplican cuando comprás</p>
          <a className='text-[#3483FA]' href="https://www.mercadolibre.com.ar/ayuda/18301#c_id=/home/regret&c_uid=dcc88d15-8346-4751-8984-cb0116abe13d">Ver contratos de adhesión - Ley N.º 24.240 de Defensa al Consumidor </a>
        </div>
      </div>

      <div className='flex w-full items-center justify-end gap-2 pb-3 px-[40px]'>
        <a href="https://www.argentina.gob.ar/superintendencia-de-seguros" target="_blank" rel="noreferrer">
          <img className='h-[41px]' src={ssnlogo} alt="" />
        </a>

        <a href="http://www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp" target="_blank" rel="noreferrer">
          <img className='h-[56px]' src={banner} alt="" />
        </a>

        <a href="https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx" target="_blank" rel="noreferrer">
          <img className='h-[56px]' src={data} alt="" />
        </a>

      </div>
      <Footer />

    </section >
  )
}

export default FooterHome