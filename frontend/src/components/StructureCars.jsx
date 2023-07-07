import React from 'react'
import Footer from './Main/Footer'
import { Link } from 'react-router-dom'

const StructureCars = ({car}) => {
  return (
    <div className='ml-36'>
       <div className="card card-compact flex w-96 bg-base-100 shadow-xl mt-5">
          <div className='float-left'>
            <figure><img src={car.img} /></figure>
          </div>
          
              <div className="card-body">
                    <h2 className="card-title flex justify-center">{car.name}</h2>
                    <div className="flex-none">
                       <p>Brand: {car.brand}</p>
                       <p>Engine: {car.engine}</p>
                       <p>Kilometres: {car.kilometres}</p>
                      
                         <div className="rating">
                           <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                         </div>
                    </div>
                      <div className="card-actions flex justify-center">
                     <Link to={`/carDetail/${car.id}`}><button className="btn btn-primary">View More</button> </Link>
                      </div>
              </div>
      </div>
   </div>
  )
}

export default StructureCars
