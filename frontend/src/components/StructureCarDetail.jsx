import React from 'react'
import { Link } from 'react-router-dom'

const StructureCarDetail = ({car}) => {
  return (

    <>
          <div className="card lg:card-side bg-base-100 shadow-xl">
                              
<div className="carousel w-full mr-2">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={car.img[0]} className="w-full h-69" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle text-black"></a> 
      <a href="#slide2" className="btn btn-circle"></a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={car.img[1]} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle"></a> 
      <a href="#slide3" className="btn btn-circle"></a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={car.img[2]} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle"></a> 
      <a href="#slide4" className="btn btn-circle"></a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={car.img[3]} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle"></a> 
      <a href="#slide1" className="btn btn-circle"></a>
    </div>
  </div>
</div>
                       <div className="card-body ml-4">
                             <h2 className="card-title w-10 ml-6 whitespace-nowrap">{car.name}</h2>
                                <p className="py-6"> <b>Brand: </b> {car.brand}</p>
                                <p><b>Year: </b> {car.year}</p>
                                <p><b>Kilometres: </b> {car.kilometres}</p>
                                <p><b>Price: </b> {car.price}</p>
                           <div className="card-actions justify-end">
                              <button className="btn btn-primary ml-24">See seller's comment</button>
                              <button className="btn btn-primary ml-24">Send message to Seller</button>
                           </div>
                        </div>
           </div>
  

     <div>
           <Link to={"/main"}> <p>Back main</p></Link>  
    </div> 
    </>
  )
}

export default StructureCarDetail
