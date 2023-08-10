import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useContext } from 'react'
import {UserContext} from "../store/usercontext"

const StructureFavs = ({favCar}) => {
    console.log(favCar)

    const userCtx = useContext(UserContext)


    const deleteFav = (id) => { 
      axios.post(`/deleteFav/${userCtx.userId}`, {id: id.toString()})
           .then((res) => { 
            console.log(res.data)
          
            setTimeout(() => { 
                 window.location.reload()
            }, 400)
            
           })
           .catch((err) => console.log(err))
    }



  return (
    <div>
        <div className='flex justify-center items-center mt-3 m-4'>
       
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
                             <div className="mt-4">
                                 <p className="underline cursor-pointer" onClick={() => deleteFav(favCar.carId)}>Delete Favorites</p>
                             </div>
                     </div>
             </div>
          </div>
           </div> 
    </div>
  )
}

export default StructureFavs
