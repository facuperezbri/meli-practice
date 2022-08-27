import React from 'react'

const ProductDetail = ({ detail, seller, image, imageSetter }) => {

  function numberWithCommas (x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (

    <section className='border-b-[#EBEBEB] border-b-[1px] mb-8'>
      <div className='flex justify-between w-full'>

        {/* Imagenes */}
        <div className='flex'>
          <div className='flex flex-col gap-3 w-[60px]'>{detail?.pictures?.map((p) => (
            <img onMouseEnter={imageSetter} className='w-[44px] h-[44px] object-contain border-[1px] border-gray-400 border-solid rounded-sm py-1 cursor-pointer' key={p.id} src={p.url} alt={detail?.title} />
          ))}
          </div>


          <div className='flex items-center justify-center w-[378px] h-[478px] my-16 mx-7'>
            <img className='sticky top-[60px]' src={image} alt={detail?.title} />
          </div></div>

        <div>

          <div className='mt-4 w-[340px] py-4' >
            <p className='text-[14px] font-normal text-[#8D8D8D]'>{detail?.condition === 'new' ? 'Nuevo' : 'Usado'} | {detail?.sold_quantity} vendidos</p>
            <h2 className='text-[22px] font-bold'>{detail?.title}</h2>
            <h3 className='text-[36px] font-light'>$ {numberWithCommas(Math.ceil(detail?.price))}</h3>
          </div>

          <div className='flex flex-col gap-3 w-[341px]'>
            <p className='text-[14px] font-bold'>Lo que tenés que saber de este producto</p>
            <ul className=' list-disc leading-7'>
              {detail.attributes.slice(0, 8).map((a, i) => (
                <li key={i} className='text-[14px]' >{a.name} {a.values[0].name}</li>
              ))}
            </ul>
          </div>

        </div>


      </div>
    </section >
  )
}

export default ProductDetail