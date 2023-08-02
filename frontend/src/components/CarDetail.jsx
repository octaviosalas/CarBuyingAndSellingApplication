import  { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import StructureCarDetail from './StructureCarDetail'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from "./Main/Footer"
import PruebaDeNav from './PruebaDeNav'
import FooterTwo from './Main/FooterTwo'
import AutosSimilares from './RelatedCars'
import SendReview  from "./SendReview"
import {Link} from "react-router-dom"
import * as React from 'react';


const CarDetail = () => {
    
    const {id} = useParams()
    const [car, setCar] = useState([])
    const [carLocation, setCarLocation] = useState("")
    const [relatedCars, setRelatedCars] = useState([])
    const [loadRelated, setLoadRelated] = useState(true)
    const [sendReview, setSendReview] = useState(false)
    const [sellerName, setSellerName] = useState("")


    useEffect(() => { 
        axios.get(`/getOneCar/${id}`)
             .then((res) =>  {
                console.log(res.data)
                setCar(res.data)
                res.data.map((c) => { 
                  setSellerName(c.seller)
                })           
             })
             .catch((err) => console.log(err))
    }, [])


    useEffect(() => { 
      if (car.length > 0) {
        setCarLocation(car[0].location);
      }
    }, [car]);
    
    useEffect(() => { 
      axios.get("/getAllCars")
        .then((res) => { 
          const docs = res.data
          const filterByLoc = docs.filter(car => car.location === carLocation)
          setTimeout(() => { 
            setRelatedCars(filterByLoc)
          }, 1100)
          setTimeout(() => { 
            setLoadRelated(false)
          }, 1700)
        })
        .catch(err => { 
          console.log(err)
        });
    }, [carLocation]);

    const showReview = () => { 
      setSendReview(true)
      setLoadRelated(true)
      console.log("aa")
    }

  return (

    <>
        <div>
              <div>
              <PruebaDeNav/>
                <Sidebar />
            </div>
              {  car.map((car) => <StructureCarDetail car={car} showReview={showReview}/>)}

              
            </div>
     
       <div>
              { loadRelated ? null
                : 
                <div className='mt-[50px]'>
                      <p className='bg-white text-black'>Cars that we recommend in this same location</p>
                      <div className=' 2xl:ml-[100px] xl:ml-[90px] lg:ml-[90px] mt-[20px]' >
                          <AutosSimilares cars={relatedCars}/>
                      </div>     
                </div>
              }

              {sendReview ?  <SendReview/> : null}
        </div> 

          <div className='mt-[35px]'>
            <Link to={"/allCars"}> <p>Go Main</p> </Link> 
              <Footer />
              <FooterTwo/>
          </div>
    </>

    
  )
}

export default CarDetail
