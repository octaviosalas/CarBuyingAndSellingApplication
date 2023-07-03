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
                       <div  className="card-body ml-4 text-cemter">
                          
                       
                
                          <div  className='ml-25 mt-10'>
                               <h2 className="card-title w-5 ml-10  whitespace-nowrap">{car.name}</h2>
                               <br />
                               <hr />
                                <p> <b>Brand: </b> {car.brand}.</p>
                                <p><b>Car Year: </b> {car.year}.</p>
                                <p><b>Kilometres: </b> {car.kilometres}.</p>
                                <p><b>Price: </b> {car.price} USD</p>
                          </div>
                            
                           <div className="card-actions mt-10 justify-end flex">
                              <button className="btn btn-primary ">Send message to Seller</button>
                           </div>
                        </div>
           </div>

                <div>
                   <div tabIndex={0} className="collapse border border-base-300 bg-base-200"> 
                      <div className="collapse-title text-xl font-medium"> Sellers Location</div>
                         <div className="collapse-content"> 
                            <p>{car.location}</p>
                         </div>
                   </div>
                   <div tabIndex={0} className="collapse border border-base-300 bg-base-200"> 
                      <div className="collapse-title text-xl font-medium"> View Seller Description</div>
                         <div className="collapse-content"> 
                            <p>It is a long established fact that a reader will be distracted by the text content of a site while looking at its design. The point of using Lorem Ipsum is that it has a more or less normal distribution of the letters, as opposed to using texts such as "Content here, content here". These texts make it sound like readable Spanish. Many desktop publishing packages and web page editors use Lorem Ipsum as their default text, and a search for "Lorem Ipsum" will return many websites that use this text if they are in a development state. Many versions have evolved over the years, sometimes by accident, other times on purpose for example, inserting humor and the like</p>
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
