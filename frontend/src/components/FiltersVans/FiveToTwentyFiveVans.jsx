import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'
import StructureCars from '../StructureCars'
import PruebaDeNav from '../PruebaDeNav'
import Sidebar from '../Sidebar'

const FiveToTwentyFive = () => {
    
    const [carsFilteredByKms, setCarsFilteredByKms] = useState([])
    
    
    useEffect(() => { 
        axios.get("http://localhost:4000/getAllCars")
             .then((res) => { 
               const allCars = res.data
               const lessThanTenThousandKilometers = allCars.filter(cars => cars.kilometres <= 25000 && cars.type === "van")
               console.log(lessThanTenThousandKilometers)
               setCarsFilteredByKms(lessThanTenThousandKilometers)
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
         <h5>You are looking at Vans that have between Five and Ten thousand kilometers </h5>
      </div>
         {carsFilteredByKms.map((car) => <StructureCars car={car}/>)}
    </div>
    </div>
  )
}

export default FiveToTwentyFive
