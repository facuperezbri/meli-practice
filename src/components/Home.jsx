import React from 'react'
import image1 from '../assets/carrousel-images/1.webp'
import image2 from '../assets/carrousel-images/2.webp'
import image3 from '../assets/carrousel-images/3.webp'
import image4 from '../assets/carrousel-images/4.webp'
import image5 from '../assets/carrousel-images/5.webp'
import image6 from '../assets/carrousel-images/6.webp'

const Carrousel = () => {

  return (
    <div id="carouselExampleControls" className="flex justify-center items-center carousel slide w-[84%]" data-bs-ride="carousel" data-interval="1000">
      <div className="carousel-inner w-[1600px]">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={image4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={image5} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={image6} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carrousel