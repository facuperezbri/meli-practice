import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BsTruck } from 'react-icons/bs'
import { MdOutlineLocationOn } from 'react-icons/md'
import loading from '../assets/loading.gif'


const ProductDetail = () => {
  const params = useParams()
  const [detail, setDetail] = useState()
  const [seller, setSeller] = useState()

  async function searchDetail (id) {
    let data = await axios.get(`https://api.mercadolibre.com/items/${id}`)
    setDetail(data.data)
    return data.data
  }

  function numberWithCommas (x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  useEffect(() => {
    searchDetail(params.id).then(r => {
      document.title = r.title
      axios.get(`https://api.mercadolibre.com/users/${r.seller_id}`).then((r) => {
        setSeller(r.data.nickname)
      })
    })
    return () => {
      document.title = 'Mercado Libre Challenge'
      setDetail('')
    }
  }, [params.id])

  if (!detail) {
    return (
      <div className='flex justify-center items-center w-full h-full '>
        <img src={loading} alt='loading' />
      </div>
    )
  }

  console.log(seller);

  return (

    <div className='flex justify-center items-center m-auto bg-white w-[1200px] rounded-sm shadow-sm mt-10 p-3'>
      <div className='flex justify-between w-full'>
        <div className='flex flex-col gap-2 w-[60px]'>{detail?.pictures?.map((p) => (
          <img className='w-[44px] h-[44px] object-contain' key={p.id} src={p.url} alt={detail?.title} />
        ))}</div>
        <div className='flex items-center justify-center'>
          <img src={detail?.pictures[0].url} alt={detail?.title} />
        </div>
        <div>

          <div className='mt-4 w-[340px]' >
            <p className='text-[14px] font-normal text-[#8D8D8D]'>{detail?.condition === 'new' ? 'Nuevo' : 'Usado'} | {detail?.sold_quantity} vendidos</p>
            <h2 className='text-[22px] font-bold'>{detail?.title}</h2>
            <h3 className='text-[36px] font-light'>$ {numberWithCommas(Math.ceil(detail?.price))}</h3>
          </div>

        </div>
        <div>

          <div className='border-solid border-[1px] border-gray-200 p-4 rounded-md w-[310px]' >

            <div className='flex items-start text-[#00A650]'>
              <BsTruck size={20} />
              <div>
                <p className='ml-2'>Llega gratis el<span className='font-bold'> miércoles</span></p>
                <p className='flex ml-2 text-[#6592D8] font-medium text-[14px]'><MdOutlineLocationOn size={20} /> Enviar a Villanueva Bº Lago El Torreon 548</p>
              </div>
            </div>

            <div>
              <p>Vendido por {seller}</p>
              <p>MercadoLíder</p>
              <p>Hace Factura A</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail