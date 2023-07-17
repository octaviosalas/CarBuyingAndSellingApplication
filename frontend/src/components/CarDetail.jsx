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
        axios.get(`http://localhost:4000/getOneCar/${id}`)
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

      setTimeout(() => { 
         axios.get("http://localhost:4000/getAllCars")
              .then((res) => { 
                const docs = res.data
                const filterByLoc = docs.filter(car => car.location === carLocation)
                setRelatedCars(filterByLoc)
                setTimeout(() => { 
                   setLoadRelated(false)
                }, 1000)


              })
              .catch(err => console.log(err))
      }, 200)
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

       <div>
           { loadRelated ? <p> Cargando..</p>
            : 
            <>

            <div className='mt-[80px]'>
              <div>
                  <h5>Recommended cars in the same location</h5>
              </div>
              <div className='mt-[20px]'>
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
       </div>
    </>

    
  )
}

export default CarDetail
