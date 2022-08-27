import React from 'react'

const Description = ({ description }) => {
  return (
    <section className='max-w-[769px]'>
      <h3 className='text-[24px] pb-[24px]'>Descripción</h3>
      <p className='text-[20px] text-[#666666]'>{description?.plain_text}</p>
    </section>
  )
}

export default Description