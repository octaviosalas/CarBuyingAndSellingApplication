import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import StructureCarDetail from './StructureCarDetail'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from "./Main/Footer"
import PruebaDeNav from './PruebaDeNav'
import FooterTwo from './Main/FooterTwo'

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

    <>
        <div>

        <div>
          <PruebaDeNav/>
          <Sidebar />
       </div>
         {car.map((car) => <StructureCarDetail car={car}/>)}
       </div>

       <div>
          <Footer />
    
       </div>
    </>

    
  )
}

export default CarDetail
