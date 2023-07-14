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
       axios.get("http://localhost:4000/getAllCars")
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

      <div className='mb-6'> 
         <h5>You are looking at cars in {location} </h5>
      </div>
         {carsFiltered.map((car) => <StructureCars car={car}/>)}
    </div>
  )
}

export default FilteringByLocation
