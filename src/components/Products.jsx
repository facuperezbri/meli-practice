import React from 'react'

const Card = ({ title, image, price, id, shipping }) => {

  function numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (

    <div className='flex items-start w-[885px] max-h-[200px] py-[20px] pr-[50px] border-b-[#EBEBEB] border-b-[1px]'>
      <img className='w-[160px] max-h-[160px] object-contain mx-6' src={image} alt={title} />
      <div className='flex flex-col justify-start h-full'>
        <h3 className=' font-light text-[20px]'>{title}</h3>
        <p className='text-[24px]'>$ {numberWithCommas(Math.ceil(price))}</p>
        {shipping && <p className=' font-bold text-[#00A650]'>Envío gratis</p>}
      </div>
    </div>
  )
}

const Products = ({ products }) => {
  return (
    <div className=' m-auto mt-8 bg-white w-fit rounded-sm'>
      {
        products.results?.map((p) => (
          <Card key={p.id} image={p.thumbnail} title={p.title} price={p.price} id={p.id} shipping={p.shipping.free_shipping} />
        ))
      }
    </div>
  )
}

export default Products