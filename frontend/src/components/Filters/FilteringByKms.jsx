import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'
import StructureCars from '../StructureCars'
import PruebaDeNav from '../PruebaDeNav'
import Sidebar from '../Sidebar'

const FilteringByKms = () => {

    const {kilometres} = useParams()
    
 
    const [carsFilteredByKms, setCarsFilteredByKms] = useState([])
    
    
    useEffect(() => { 
        axios.get("http://localhost:4000/getAllCars")
             .then((res) => { 
               const allCars = res.data
               console.log(allCars)
             })
             .catch((err) => { 
               console.log(err)
             })
    }, [])

    useEffect(() => { 
       setTimeout(() => { 
        console.log("El parametro es " + kilometres)
        console.log("La marca del sessionStorage es " + sessionStorage.kilometres)
       }, 1000)
    }, [])
    

    
  return (
    <div>
      
    </div>
  )
}

export default FilteringByKms
