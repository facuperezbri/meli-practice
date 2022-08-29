import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'
import Questions from '../components/Questions'
import Description from '../components/Description'
import loading from '../assets/loading.gif'
import SellerInfo from '../components/SellerInfo'
import Footer from '../components/Footer'
import Opinions from '../components/Opinions'

const DetailContainer = () => {
  const params = useParams()
  const [detail, setDetail] = useState()
  const [seller, setSeller] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState()

  async function searchDetail (id) {
    let data = await axios.get(`http://localhost:3001/items/${id}`)
    setDetail(data.data)
    return data.data
  }

  useEffect(() => {
    searchDetail(params.id).then(r => {
      setImage(r.pictures[0].url);
      document.title = r.title
      axios.get(`http://localhost:3001/description/${params.id}`).then(r => {
        setDescription(r.data)
      })
      axios.get(`http://localhost:3001/users/${r.seller_id}`).then((r) => {
        setSeller(r.data)
      })
    })
    return () => {
      document.title = 'Mercado Libre Challenge'
      setDetail('')
    }
  }, [params.id])

  function imageSetter (e) {
    setImage(e.target.src)
  }

  if (!detail) {
    return (
      <div className='flex justify-center items-center w-full h-full '>
        <img src={loading} alt='loading' />
      </div>
    )
  }

  return (
    <>
      <div className='flex justify-between mx-auto bg-white w-[1200px] rounded-sm shadow-sm my-10 p-4'>
        <div className='flex flex-col'>
          <ProductDetail detail={detail} image={image} imageSetter={imageSetter} />
          <Description description={description} />
          <Questions seller={seller} detail={detail} />
          <Opinions detail={detail} />
        </div>
        <SellerInfo seller={seller} detail={detail} />
      </div>
      <Footer />
    </>
  )
}

export default DetailContainer