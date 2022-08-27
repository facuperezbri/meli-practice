import React from 'react'
import { BsTruck } from 'react-icons/bs'
import { MdOutlineLocationOn, MdOutlineGppGood } from 'react-icons/md'
import { IoReturnDownBack } from 'react-icons/io5'
import { BiTrophy } from 'react-icons/bi'
import { TbAward } from 'react-icons/tb'
import loading from '../assets/loading.gif'


const ProductDetail = ({ detail, seller, description, image, imageSetter }) => {

  function numberWithCommas (x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  if (!detail) {
    return (
      <div className='flex justify-center items-center w-full h-full '>
        <img src={loading} alt='loading' />
      </div>
    )
  }

  return (

    <section>
      <div className='flex justify-between w-full'>

        {/* Imagenes */}
        <div className='flex flex-col gap-3 w-[60px]'>{detail?.pictures?.map((p) => (
          <img onClick={imageSetter} className='w-[44px] h-[44px] object-contain border-[1px] border-gray-400 border-solid rounded-sm py-1 cursor-pointer' key={p.id} src={p.url} alt={detail?.title} />
        ))}
        </div>


        <div className='flex items-center justify-center w-[378px] h-[478px] overflow-hidden'>
          <img src={image} alt={detail?.title} />
        </div>
        <div>

          <div className='mt-4 w-[340px]' >
            <p className='text-[14px] font-normal text-[#8D8D8D]'>{detail?.condition === 'new' ? 'Nuevo' : 'Usado'} | {detail?.sold_quantity} vendidos</p>
            <h2 className='text-[22px] font-bold'>{detail?.title}</h2>
            <h3 className='text-[36px] font-light'>$ {numberWithCommas(Math.ceil(detail?.price))}</h3>
          </div>

        </div>
        <div>

          <div className='flex flex-col gap-6 border-solid border-[1px] border-gray-200 p-4 rounded-md w-[310px]' >
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
        </div>
      </div>
    </section >
  )
}

export default ProductDetail