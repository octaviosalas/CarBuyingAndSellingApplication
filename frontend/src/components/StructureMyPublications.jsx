import React from 'react'
import { Link } from 'react-router-dom'
import fav from "../img/fav.png"
import axios from "axios"

const StructureMyPublications = ({car}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure><img src={car.img[0]} alt="Album"/></figure>
    <div className="card-body">
        <div className='flex'>
            <div>
              <h2 className="card-title">{car.name}</h2>
            </div>
            <div className='ml-10'>
              <div className="badge badge-primary bg-red-500 text-black border-none">Posted on: {car.publicationDate}</div>
            </div>
            <hr />
        </div>

   
      <div className="card-actions  justify-center mt-[25px]">
        <hr />
      <Link to={`/carDetail/${car.id}`}><button className="btn btn-primary">View More</button> </Link>
      </div>
    </div>
  </div>
  )
}

export default StructureMyPublications

/*

import React from 'react'
import { Link } from 'react-router-dom'
import fav from "../img/fav.png"
import axios from "axios"

const StructureMyPublications = ({car}) => {
  return (
    <div className='flex justify-center items-center mt-3'>
       
    <div className='border-black'>
           <div className="card card-compact flex w-96 bg-base-100 shadow-2xl mt-5">
            <div classname="float-right">
            <img src={fav} alt="" className='w-8 h-8  justify-center float-right cursor-pointer' title="Save as Favorite"/>
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
                           <p> Posted on: {car.publicationDate}</p>
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

export default StructureMyPublications


*/