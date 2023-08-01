import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import StructureCarDetail from './StructureCarDetail'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from "./Main/Footer"
import PruebaDeNav from './PruebaDeNav'
import FooterTwo from './Main/FooterTwo'
import AutosSimilares from './RelatedCars'
import {Link} from "react-router-dom"

const CarDetail = () => {
    
    const {id} = useParams()
    const [car, setCar] = useState([])
    const [carLocation, setCarLocation] = useState("")
    const [relatedCars, setRelatedCars] = useState([])
    const [loadRelated, setLoadRelated] = useState(true)

    useEffect(() => { 
        axios.get(`/getOneCar/${id}`)
             .then((res) =>  {
                console.log(res.data)
                setCar(res.data)           
             })
             .catch((err) => console.log(err))
    }, [])


    useEffect(() => { 
      car.map((c) => { 
          setCarLocation(c.location)
      })
         axios.get("/getAllCars")
              .then((res) => { 
                const docs = res.data
                const filterByLoc = docs.filter(car => car.location === carLocation)
                console.log(filterByLoc)
                setRelatedCars(filterByLoc)
               
              })
              .catch(err => { 
                console.log(err)
                console.log("NO ENCUENTRO AUTOS RELACIONADOS")
              } )
  
    }, [car])

  return (

    <>
        <div>

        <div>
          <PruebaDeNav/>
          <Sidebar />
       </div>
         {car.map((car) => <StructureCarDetail car={car}/>)}
       </div>
       <button onClick={() => setLoadRelated(false)}>Ver autos en esta ubicacion</button>

       <div>
           { loadRelated ? null
            : 
            <>
            <div >
              <div className=' 2xl:ml-[100px] xl:ml-[90px] lg:ml-[90px] mt-[20px]' >
                  <AutosSimilares cars={relatedCars}/>
              </div>
                
            </div>

           </> }
       </div>

       <div className='mt-[35px]'>
         <Link to={"/allCars"}> <p>Go Main</p> </Link> 
       <div>
      
      </div>
          <Footer />
          <FooterTwo/>
       </div>
    </>

    
  )
}

export default CarDetail
