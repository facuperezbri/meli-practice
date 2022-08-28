import React from 'react'
import disneyStar from '../assets/beneficios-mp/disney-star.png'
import hbo from '../assets/beneficios-mp/hbo.jpeg'
import paramount from '../assets/beneficios-mp/paramount.jpeg'
import comboplus from '../assets/beneficios-mp/comboplus-square.jpeg'

const BeneficioMercadoPuntos = () => {
  return (
    <div className='flex flex-col w-[1200px] gap-2'>
      <div className='flex justify-start items-center gap-3'>
        <p className='text-[26px] text-[#666666] font-light'>Beneficios de Mercado Puntos</p>
        <p className='text-[16px] text-[#3483FA]'>Ver todos los beneficios</p>
      </div>

      <div className='flex justify-between'>
        <div className=' relative'>
          <img className='w-[384px] h-[250px] rounded-lg' src={disneyStar} alt="" />
          <div className='flex items-center absolute bottom-0 m-3 text-white gap-3'>
            <img className='rounded-lg' src={comboplus} alt="" />
            <div>
              <p className='text-[18px] font-bold'>Sin cargo con el nivel 6</p>
              <p className='text-[18px]'>Disney+ y Star+</p>
            </div>
          </div>
        </div>

        <div className=' relative'>
          <img className='w-[384px] h-[250px] rounded-lg' src={hbo} alt="" />
          <div className='flex items-center absolute bottom-0 m-3 text-white gap-3'>
            <img className='rounded-lg' src={comboplus} alt="" />
            <div>
              <p className='text-[12px] font-bold'>7 DÍAS GRATIS</p>
              <p className='text-[18px] font-bold'>Sin cargo con el nivel 6</p>
              <p className='text-[18px]'>Disney+ y Star+</p>
            </div>
          </div>
        </div>

        <div className=' relative'>
          <img className='w-[384px] h-[250px] rounded-lg' src={paramount} alt="" />
          <div className='flex items-center absolute bottom-0 m-3 text-white gap-3'>
            <img className='rounded-lg' src={comboplus} alt="" />
            <div>
              <p className='text-[18px] font-bold'>Sin cargo con el nivel 6</p>
              <p className='text-[18px]'>Disney+ y Star+</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BeneficioMercadoPuntos