import React from 'react'
import { Link } from 'react-router-dom'
import fav from "../img/fav.png"
import axios from "axios"

const StructureMyPublications = ({car}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure><img src={car.img[0]} alt="Album" className='w-[200px] h-[200px]'/></figure>
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
