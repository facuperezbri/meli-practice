import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ title, image, price, id, shipping }) => {

  function numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (

    <div className='flex items-start gap-8 w-[885px] max-h-[200px] py-[20px] pr-[50px] border-b-[#EBEBEB] border-b-[1px]'>
      <Link to={`/items/${id}`}>
        <img className='w-[160px] max-w-[160px] max-h-[160px] object-contain ml-6' src={image} alt={title} />
      </Link>
      <div className='flex flex-col justify-start h-full'>
        <Link to={`/items/${id}`}>
          <h3 className=' font-light text-[20px]'>{title}</h3>
          <p className='text-[24px]'>$ {numberWithCommas(Math.ceil(price))}</p>
        </Link>
        {shipping && <p className=' font-bold text-[#00A650]'>Envío gratis</p>}
      </div>
    </div>
  )
}

const Products = ({ products }) => {
  return (
    <div className='m-auto mt-8 bg-white w-fit rounded-md'>
      {
        products.results?.map((p) => (
          <Card key={p.id} image={p.thumbnail} title={p.title} price={p.price} id={p.id} shipping={p.shipping.free_shipping} />
        ))
      }
    </div>
  )
}

export default Products