import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'
import StructureCars from '../StructureCars'
import PruebaDeNav from '../PruebaDeNav'
import Sidebar from '../Sidebar'

const FilterTenToTwentyFive = () => {

  const [carsFilteredByKms, setCarsFilteredByKms] = useState([])
    
    
    useEffect(() => { 
        axios.get("http://localhost:4000/getAllCars")
             .then((res) => { 
               const allCars = res.data
               const lessThantwentyFiveKms = allCars.filter(cars => cars.kilometres <= 50000 && cars.kilometres >= 25000)
               console.log(lessThantwentyFiveKms)
               setCarsFilteredByKms(lessThantwentyFiveKms)
             })
             .catch((err) => { 
               console.log(err)
             })
    }, [])

  return (
    <div>
        <div>
            <div>
      <PruebaDeNav/>
      <Sidebar/>

      <div className='mb-6'> 
         <h5>You are looking at cars that have between 25,000 and 50,000 kilometers </h5>
      </div>
         {carsFilteredByKms.map((car) => <StructureCars car={car}/>)}
    </div>
    </div>
    </div>
  )
}

export default FilterTenToTwentyFive
