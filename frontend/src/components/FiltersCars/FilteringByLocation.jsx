import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'
import StructureCars from '../StructureCars'
import PruebaDeNav from '../PruebaDeNav'
import Sidebar from '../Sidebar'

const FilteringByLocation = () => {

    
   const {location} = useParams()
   console.log("El parametro es " + location)
   console.log("La marca del sessionStorage es " + sessionStorage.location)

   const [carsFiltered, setCarsFiltered] = useState([])
   
   
   useEffect(() => { 
       axios.get("/getAllCars")
            .then((res) => { 
              const allCars = res.data
              const filterByLocation = allCars.filter(cars => cars.location === location)           
              setCarsFiltered(filterByLocation)
            })
            .catch((err) => { 
              console.log(err)
            })
   }, [])
   


  return (
    <div>
      <PruebaDeNav/>
      <Sidebar/>

      {carsFiltered.length === 0 
      ? 
      <p>At the moment, no user has published their car in {location}. We regret that we do not have availability in this location </p> 
      :
      <>
     <div className='mb-6'> 
         <h5>You are looking at cars in {location} </h5>
      </div>

      <div>
        {carsFiltered.map((car) => <StructureCars car={car}/>)}
      </div>
      </>
      }

     
   
    </div>
  )
}

export default FilteringByLocation
