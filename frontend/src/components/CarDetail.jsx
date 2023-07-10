import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import StructureCarDetail from './StructureCarDetail'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const CarDetail = () => {
    
    const {id} = useParams()
    const [car, setCar] = useState([])

    useEffect(() => { 
        axios.get(`http://localhost:4000/getOneCar/${id}`)
             .then((res) =>  {
                console.log(res.data)
                setCar(res.data)
             })
             .catch((err) => console.log(err))
    }, [])

  return (
    <div>

      <div>
        
         <Sidebar />
      </div>
          {car.map((car) => <StructureCarDetail car={car}/>)}
    </div>
  )
}

export default CarDetail
