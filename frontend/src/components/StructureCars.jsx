import React from 'react'
import Footer from './Main/Footer'
import { Link } from 'react-router-dom'
import fav from "../img/fav.png"
import axios from "axios"
import { useContext } from 'react';
import { UserContext } from '../store/usercontext';
import { saveInFavs } from '../../../backend/controllers/cars'


const StructureCars = ({car}) => { 

  const userCtx = useContext(UserContext)
  console.log(userCtx.userId)

   const saveCarInFavs = () => { 
    const newCar = { 
      carId: car.id,
      userId: userCtx.userId,
      carName: car.name,
      carBrand: car.brand,
      carKms: car.kilometres,
      carImg: car.img[0],
      carSeller: car.seller,
      carPrice: car.price
    }
    axios.post("http://localhost:4000/setFav", newCar)
         .then((res) => { 
          console.log(res.data)
         })
         .catch((err) => { 
          console.log(err)
         })
   }


  return (
    <div className='flex justify-center items-center mt-3'>
       
<div className='border-black'>
       <div className="card card-compact flex w-96 bg-base-100 shadow-2xl mt-5">
        <div classname="float-right">
        <img src={fav} alt="" className='w-8 h-8  justify-center float-right cursor-pointer' title="Save as Favorite" onClick={() => saveCarInFavs()}/>
        </div>
          <div className='float-left'>
            <figure><img src={car.img[0]} /></figure>
          </div>
          
              <div className="card-body">
                    <h2 className="card-title flex justify-center">{car.name}</h2>
                    <div className="flex-none">
                       <p>Brand: {car.brand}</p>
                       <p>Engine: {car.engine}</p>
                       <p>Kilometres: {car.kilometres}</p>
                    </div>
                      <div className="card-actions flex justify-center">
                     <Link to={`/carDetail/${car.id}`}><button className="btn btn-primary">View More</button> </Link>
                      </div>
              </div>
      </div>
   </div>
    </div>
 
  )
}

export default StructureCars


/*import React from 'react'
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
*/