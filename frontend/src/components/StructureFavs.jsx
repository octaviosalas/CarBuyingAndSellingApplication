import React from 'react'
import { Link } from 'react-router-dom'

const StructureFavs = ({favCar}) => {
    console.log(favCar)
  return (
    <div>
        <div className='flex justify-center items-center mt-3'>
       
       <div className='border-black'>
              <div className="card card-compact flex w-96 bg-base-100 shadow-2xl mt-5">
               <div classname="float-right">
          
               </div>
                 <div className='float-left'>
                   <figure><img src={favCar.carImg} /></figure>
                 </div>
                 
                     <div className="card-body">
                           <h2 className="card-title flex justify-center">{favCar.carName}</h2>
                           <div className="flex-none">
                              <p>Brand: {favCar.carSeller}</p>
                              <p>Engine: {favCar.carPrice}</p>
                              <p>Kilometres: {favCar.carKms}</p>
                           </div>
                             <div className="card-actions flex justify-center">
                            <Link to={`/carDetail/${favCar.carId}`}><button className="btn btn-primary">View More</button> </Link>
                             </div>
                     </div>
             </div>
          </div>
           </div>
    </div>
  )
}

export default StructureFavs
