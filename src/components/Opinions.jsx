import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BsStarFill, BsStar } from 'react-icons/bs'
import { HiOutlineThumbUp, HiOutlineThumbDown } from 'react-icons/hi'
import { API_URL } from '../services/API'

function starsDisplay (review, size) {
  if (review < 0.5) {
    return (
      <div className='flex justify-between w-[200px]'>
        <BsStar size={size} color={'#3483fa'} />
        <BsStar size={size} color={'#3483fa'} />
        <BsStar size={size} color={'#3483fa'} />
        <BsStar size={size} color={'#3483fa'} />
        <BsStar size={size} color={'#3483fa'} />
      </div>
    )
  } else if (review > 0.5 && review < 1.5) {
    return (
      <div className='flex justify-between w-[200px]'>
        <BsStarFill size={size} color={'#3483fa'} />
        <BsStar size={size} color={'#3483fa'} />
        <BsStar size={size} color={'#3483fa'} />
        <BsStar size={size} color={'#3483fa'} />
        <BsStar size={size} color={'#3483fa'} />
      </div>
    )
  } else if (review > 1.5 && review < 2.5) {
    return (
      <div className='flex justify-between w-[200px]'>
        <BsStarFill size={size} color={'#3483fa'} />
        <BsStarFill size={size} color={'#3483fa'} />
        <BsStar size={size} color={'#3483fa'} />
        <BsStar size={size} color={'#3483fa'} />
        <BsStar size={size} color={'#3483fa'} />
      </div>
    )
  } else if (review > 2.5 && review < 3.5) {
    return (
      <div className='flex justify-between w-[200px]'>
        <BsStarFill size={size} color={'#3483fa'} />
        <BsStarFill size={size} color={'#3483fa'} />
        <BsStarFill size={size} color={'#3483fa'} />
        <BsStar size={size} color={'#3483fa'} />
        <BsStar size={size} color={'#3483fa'} />
      </div>
    )
  } else if (review > 3.5 && review < 4.5) {
    return (
      <div className='flex justify-between w-[200px]'>
        <BsStarFill size={size} color={'#3483fa'} />
        <BsStarFill size={size} color={'#3483fa'} />
        <BsStarFill size={size} color={'#3483fa'} />
        <BsStarFill size={size} color={'#3483fa'} />
        <BsStar size={size} color={'#3483fa'} />
      </div>
    )
  } else if (review > 4.5) {
    return (
      <div className='flex justify-between w-[200px]'>
        <BsStarFill size={size} color={'#3483fa'} />
        <BsStarFill size={size} color={'#3483fa'} />
        <BsStarFill size={size} color={'#3483fa'} />
        <BsStarFill size={size} color={'#3483fa'} />
        <BsStarFill size={size} color={'#3483fa'} />
      </div>
    )
  }

}

const Card = ({ r }) => (
  (
    <div className='flex flex-col mt-5'>
      {console.log(r)}
      {starsDisplay(r?.rate, 15)}
      <p className='text-[16px] font-bold mt-3'>{r?.title}</p>
      <p className='text-[16px] font-light'>{r?.content}</p>
      <div className='flex gap-4'>
        <div className='flex items-center gap-2'>
          <HiOutlineThumbUp />
          {r?.likes}
        </div>
        <div className='flex items-center gap-2'>
          <HiOutlineThumbDown />
          {r?.dislikes}
        </div>
      </div>
    </div>
  )
)



const Opinions = ({ detail }) => {
  const params = useParams();
  const [opinions, setOpinions] = useState();

  useEffect(() => {
    axios.get(`${API_URL}/reviews/${params.id}`).then((r) => {
      setOpinions(r.data)
    })
  }, [params.id])

  return (
    <section className='flex flex-col pl-7 pt-3'>
      <h3 className='text-[24px] pb-[24px]'>
        Opiniones sobre {detail.title}
      </h3>
      <div className='flex items-center gap-20'>
        <div className='flex flex-col'>
          <p className='text-[64px] font-light text-right leading-none'>{opinions?.rating_average}</p>

          {starsDisplay(opinions?.rating_average, 25)}

          <p className='text-[14px] text-[#9F9F9F] mt-1'>Promedio entre {opinions?.paging.total} opiniones</p>
        </div>
        <div className='text-[#9F9F9F]'>

          <div className='flex gap-3 items-center justify-center '>
            <p className='flex-1 w-[80px] text-left'>5 estrellas</p>
            <div className='w-[150px] h-[4px] bg-[#E5E5E5] rounded-full' />
            <p className='w-[10px] text-center'>{opinions?.rating_levels.five_star}</p>
          </div>

          <div className='flex gap-3 items-center justify-center '>
            <p className='flex-1 w-[80px] text-left'>4 estrellas</p>
            <div className='w-[150px] h-[4px] bg-[#E5E5E5] rounded-full' />
            <p className='w-[10px] text-center'>{opinions?.rating_levels.four_star}</p>
          </div>

          <div className='flex gap-3 items-center justify-center '>
            <p className='flex-1 w-[80px] text-left'>3 estrellas</p>
            <div className='w-[150px] h-[4px] bg-[#E5E5E5] rounded-full' />
            <p className='w-[10px] text-center'>{opinions?.rating_levels.three_star}</p>
          </div>

          <div className='flex gap-3 items-center justify-center '>
            <p className='flex-1 w-[80px] text-left'>2 estrellas</p>
            <div className='w-[150px] h-[4px] bg-[#E5E5E5] rounded-full' />
            <p className='w-[10px] text-center'>{opinions?.rating_levels.two_star}</p>
          </div>

          <div className='flex gap-3 items-center justify-center '>
            <p className='flex-1 w-[80px] text-left'>1 estrellas</p>
            <div className='w-[150px] h-[4px] bg-[#E5E5E5] rounded-full' />
            <p className='w-[10px] text-center'>{opinions?.rating_levels.one_star}</p>
          </div>

        </div>
      </div>
      {opinions?.reviews.map((r) => (
        <Card r={r} />
      )

      )}
    </section>
  )
}

export default Opinions