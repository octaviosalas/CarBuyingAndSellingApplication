import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'
import StructureCars from '../StructureCars'
import PruebaDeNav from '../PruebaDeNav'
import Sidebar from '../Sidebar'

const FilterVanByLocation = () => {

    const {location} = useParams()
   

   const [carsFiltered, setCarsFiltered] = useState([])
   
   
   useEffect(() => { 
       axios.get("http://localhost:4000/getAllCars")
            .then((res) => { 
              const allCars = res.data
              const filterByLocation = allCars.filter(cars => cars.location === location && cars.type === "van")           
              setCarsFiltered(filterByLocation)
            })
            .catch((err) => { 
              console.log(err)
            })
   }, [])
   

  return (
    <div>
        <div>
      <PruebaDeNav/>
      <Sidebar/>

      <div className='mb-6'> 
         <h5>You are looking at Vans in {location} </h5>
      </div>
         {carsFiltered.map((car) => <StructureCars car={car}/>)}
    </div>
    </div>
  )
}

export default FilterVanByLocation
