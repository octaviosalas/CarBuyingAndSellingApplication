import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'
import StructureCars from '../StructureCars'
import PruebaDeNav from '../PruebaDeNav'
import Sidebar from '../Sidebar'

const FilteringVansByBrand = () => {

    const {brand} = useParams()
    console.log("LA MARCA QUE ME DA LA URL ES " + brand)
   
 
    const [carsFiltered, setCarsFiltered] = useState([])
    
    
    useEffect(() => { 
        axios.get("http://localhost:4000/getAllCars")
             .then((res) => { 
               const allCars = res.data
               const filterByBrand = allCars.filter(cars => cars.brand === brand && cars.type === "van")           
               setCarsFiltered(filterByBrand)
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
         <h5>You are looking at brand cars {brand} </h5>
      </div>
         {carsFiltered.map((car) => <StructureCars car={car}/>)}
    </div>
  )
}

export default FilteringVansByBrand
