import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import question_line from '../assets/question-line.png'
import { BsSearch } from 'react-icons/bs'

const Questions = ({ seller, detail }) => {
  const [questionsAPI, setQuestionsAPI] = useState()
  const [question, setQuestion] = useState({
    date_created: null,
    item_id: detail?.id,
    seller_id: seller?.id,
    status: null,
    text: null,
    answer: ""
  })
  const params = useParams()

  useEffect(() => {
    axios.get(`https://api.mercadolibre.com/questions/search?item=${params.id}`).then((r) => {
      setQuestionsAPI(r.data)
    })
  }, [params.id])

  function handleQuestion (e) {
    setQuestion({
      ...question,
      date_created: Date(),
      text: e.target.value,
      seller_id: seller?.id
    })
  }
  function handleSubmit (e) {
    e.preventDefault()
    setQuestionsAPI({
      ...questionsAPI,
      questions: [question, ...questionsAPI.questions]
    })
    setQuestion({
      ...question,
      text: ""
    })
  }

  return (
    <section className='flex flex-col gap-6 pl-7 pt-3 border-b-[#EBEBEB] border-b-[1px] pb-8'>
      <h3 className='text-[24px]'>Preguntas y respuestas</h3>
      <p className='text-[18px] font-semibold'>¿Qué querés saber?</p>
      <form onSubmit={handleSubmit} className='flex justify-between max-w-[769px] h-[48px] border-[0.5px] border-solid border-[#BFBFBF] rounded-md overflow-hidden '>
        <input onChange={handleQuestion} className=' flex-1 p-3' placeholder='Escribí una pregunta' value={question.text}></input>
        <button className='flex justify-center items-center bg-[#3483fa] text-white w-[64px] h-[48px]' ><BsSearch /></button>
      </form>
      <p className='text-[18px] font-semibold'>Últimas realizadas</p>
      <div className='flex flex-col gap-5 w-[769px]'>
        {questionsAPI?.questions?.slice(0, 7)?.map((q, i) => (
          q.text && <div div key={i} >
            <p className='text-[16px]' >{q?.text}</p>
            {
              q.status && <div className='flex items-start justify-start'>
                <img className='h-[30px]' src={question_line} alt='question' />
                <div className='flex flex-col'>
                  <p className='text-[#8D8D8D]' >{q?.answer?.text}</p>
                  <p className='text-[#8D8D8D] text-[14px]'>Respondido por {seller?.nickname}</p>
                </div>
              </div>}

          </div>

        ))}
      </div>

    </section >
  )
}

export default Questions