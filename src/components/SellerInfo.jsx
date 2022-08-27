import React from 'react'
import { BsTruck } from 'react-icons/bs'
import { MdOutlineLocationOn, MdOutlineGppGood } from 'react-icons/md'
import { IoReturnDownBack } from 'react-icons/io5'
import { BiTrophy } from 'react-icons/bi'
import { TbAward } from 'react-icons/tb'
import seller_bar from '../assets/seller_bar.png'
import message_positive from '../assets/message-positive.svg'
import time_positive from '../assets/time-positive.svg'
import mercadopago from '../assets/logos-tarjetas/mercadopago.svg'
import visa from '../assets/logos-tarjetas/visa.svg'
import american from '../assets/logos-tarjetas/american.svg'
import mastercard from '../assets/logos-tarjetas/mastercard.svg'
import naranja from '../assets/logos-tarjetas/naranja.svg'
import visadebito from '../assets/logos-tarjetas/visadebito.svg'
import maestro from '../assets/logos-tarjetas/maestro.svg'
import masterdebito from '../assets/logos-tarjetas/masterdebito.svg'
import cabal from '../assets/logos-tarjetas/cabal.svg'


const SellerInfo = ({ seller, detail }) => {
  return (
    <div className='flex flex-col gap-6'>

      <div className='flex flex-col gap-6 border-solid border-[1px] border-gray-200 px-5 py-7 rounded-md w-[310px]' >
        {/* Datos llegada producto */}
        <div className='flex items-start text-[#00A650]'>
          <BsTruck size={20} />
          <div>
            <p className='ml-2'>Llega gratis el<span className='font-bold'> miércoles</span></p>
            <p className='flex ml-2 text-[#6592D8] font-medium text-[14px] gap-1'><MdOutlineLocationOn size={20} /> Enviar a Villanueva Bº Lago El Torreon 548</p>
          </div>
        </div>

        {/* Datos vendedor */}
        <div>
          <p className='text-[14px]'> Vendido por <a href={seller?.permalink} className='text-[#3483fa]'>{seller?.nickname}</a></p>
          <p className='text-[14px]'>MercadoLíder | {seller?.seller_reputation.transactions.completed} ventas</p>
          <p className='text-[12px] text-[#8D8D8D]'>Hace Factura A</p>
        </div>

        {/* Cantidad */}
        <div className='flex flex-col gap-2'>
          <p className='font-bold'>Stock disponible</p>
          <p>Cantidad</p>
        </div>

        {/* Botones */}
        <div className='flex flex-col gap-2'>
          <button className='w-[275px] h-[48px] bg-[#3483FA] text-white rounded-md font-bold text-[16px] hover:bg-[#245db3] duration-500'>Comprar ahora</button>
          <button className='w-[275px] h-[48px] bg-[#D9E7FA] text-[#3483FA] rounded-md font-bold text-[16px] hover:bg-[#cad8ea] duration-500'>Agregar al carrito</button>
        </div>

        {/* Info MercadoLibre */}
        <div className='flex flex-col gap-4'>
          <div className='flex items-start gap-2 text-[14px] text-[#8D8D8D]'>
            <IoReturnDownBack size={25} />
            <p><span className='text-[#3483FA]'>Devolución gratis.</span>  Tenés 30 días desde que lo recibís.</p>
          </div>
          <div className='flex items-start gap-2 text-[14px] text-[#8D8D8D]'>
            <MdOutlineGppGood size={40} />
            <p><a href="https://www.mercadolibre.com.ar/compra-protegida" target='_blank' rel="noreferrer"><span className='text-[#3483FA]'>Compra Protegida</span></a>, recibí el producto que esperabas o te devolvemos tu dinero.</p>
          </div>
          <div className='flex items-start gap-2 text-[14px] text-[#8D8D8D]'>
            <BiTrophy size={20} />
            <p><a href="https://www.mercadolibre.com.ar/mercado-puntos"><span className='text-[#3483FA]'>Mercado Puntos</span></a>. Sumás 1486 puntos.</p>
          </div>
          <div className='flex items-start gap-2 text-[14px] text-[#8D8D8D]'>
            <TbAward size={20} />
            <p>{
              detail?.warranty?.includes('fábrica') ? detail?.warranty?.slice(20) : detail?.warranty?.slice(22)
            } de garantía de fábrica.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-6 border-solid border-[1px] border-gray-200 p-4 rounded-md w-[310px]' >
        <h3 className='text-[18px]'>Información sobre el vendedor</h3>
        <div className='flex'>
          <MdOutlineLocationOn size={25} />
          <div>
            <p className='ml-2 font-medium text-[14px] gap-1'> Ubicación</p>
            <p className='ml-2 text-[14px] text-[#8D8D8D]'>{`${detail?.seller_address.city.name}, ${detail?.seller_address.state.name}`} </p>
          </div>

        </div>

        <div className='flex'>
          <TbAward size={20} color={'#00A650'} />
          <div>
            <p className='ml-2 text-[16px] gap-1 text-[#00A650] font-bold'> MercadoLíder Platinum</p>
            <p className='ml-2 text-[14px] text-[#8D8D8D]'>¡Es uno de los mejores del sitio!</p>
          </div>
        </div>
        <img src={seller_bar} alt='Seller bar' />
        <div className='flex justify-center items-center text-center leading-3 '>
          <div className='flex flex-col items-center justify-center gap-3'>
            <p className='text-[24px]'>{seller?.seller_reputation.transactions.completed}</p>
            <p className='text-[12px] font-light'>Ventas en los últimos 60 días</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <img className='w-[28px]' src={message_positive} alt="Messages" />
            <p className='text-[12px] font-light'>Brinda buena atención</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <img className='w-[28px]' src={time_positive} alt="Time" />
            <p className='text-[12px] font-light'>Despacha sus productos a tiempo</p>
          </div>
        </div>
      </div >

      <div className='flex flex-col gap-6 border-solid border-[1px] border-gray-200 p-4 rounded-md w-[310px]' >
        <h3 className='text-[18px]'>Medios de pago</h3>

        <div>
          <p>
            Hasta 12 cuotas sin interés
          </p>
          <img src={mercadopago} alt="Mercadopago" />
        </div>

        <div>
          <p>
            Tarjetas de crédito
          </p>
          <p className='text-[14px] text-[#8D8D8D]'>
            ¡Cuotas sin interés con bancos seleccionados!
          </p>
          <div className='flex flex-wrap gap-7 mt-3'>
            <img src={visa} alt="Visa" />
            <img src={american} alt="american" />
            <img src={naranja} alt="naranja" />
            <img src={mastercard} alt="mastercard" />
          </div>

        </div>

        <div>
          <p>
            Tarjeta de débito
          </p>
          <div className='flex flex-wrap gap-7'>
            <img src={visadebito} alt="visadebito" />
            <img src={maestro} alt="maestro" />
            <img src={masterdebito} alt="masterdebito" />
            <img src={cabal} alt="cabal" />
          </div>
        </div>

      </div>
    </div >
  )
}

export default SellerInfo