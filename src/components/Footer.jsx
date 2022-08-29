import React from 'react'
import { footer } from '../constants'

const Footer = () => {
  return (
    <footer className=' bottom-0 w-full bg-white py-[16px] border-t-[1px] border-[#e9dddd] border-solid'>
      <ul className='flex justify-center gap-3'>
        {
          footer.map((f, i) => (
            <li key={i}>
              <a className='text-[13px] hover:text-inherit' href={f.url}>{f.title}</a>
            </li>
          ))
        }
      </ul>
      <div className='m-auto w-[1110px] mt-1'>
        <p className='text-[12px] text-[#999999]'>
          Copyright © 1999-2022 MercadoLibre S.R.L.
        </p>
        <p className='text-[12px] text-[#999999]'>
          Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA
        </p>
      </div>
    </footer>
  )
}

export default Footer