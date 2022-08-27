import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import question_line from '../assets/question-line.png'

const Questions = ({ seller, detail }) => {
  const [questions, setQuestions] = useState()
  const [question, setQuestion] = useState({
    date_created: 2,
    item_id: detail?.id,
    seller_id: seller?.id,
    status: null,
    text: null
  })
  const params = useParams()

  useEffect(() => {
    axios.get(`https://api.mercadolibre.com/questions/search?item=${params.id}`).then((r) => {
      setQuestions(r.data)
    })
  }, [params.id])

  function handleQuestion (e) {
    e.preventDefault()
    setQuestion(e.target.value)
  }

  console.log(question)

  return (
    <section className='flex flex-col gap-6 pl-7'>
      <h3 className='text-[24px]'>Preguntas y respuestas</h3>
      <p className='text-[18px] font-semibold'>¿Qué querés saber?</p>
      <form className='flex justify-between max-w-[769px] h-[48px] border-[0.5px] border-solid border-[#BFBFBF] rounded-md '>
        <input onChange={handleQuestion} className=' flex-1 p-3' placeholder='Escribí una pregunta'></input>
        <button >Lupa</button>
      </form>
      <p className='text-[18px] font-semibold'>Últimas realizadas</p>
      <div className='flex flex-col gap-5 w-[769px]'>
        {questions?.questions?.slice(0, 7)?.map((q, i) => (
          q.answer && <div div key={i} >
            <p className='text-[16px]' >{q?.text}</p>
            <div className='flex items-start justify-start'>
              <img className='h-[30px]' src={question_line} alt='question' />
              <div className='flex flex-col'>
                <p className='text-[#8D8D8D]' >{q?.answer?.text}</p>
                <p className='text-[#8D8D8D] text-[14px]'>Respondido por {seller.nickname}</p>
              </div>

            </div>

          </div>

        ))}
      </div>

    </section >
  )
}

export default Questions