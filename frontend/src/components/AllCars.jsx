import React from 'react'
import axios from "axios"
import PruebaDeNav from './PruebaDeNav'
import Sidebar from "./Sidebar"
import { useEffect, useState } from 'react'
import StructureCars from './StructureCars'
import Main from './Main/Main'
import Footer from './Main/Footer'
import Filters from './Filters'
import FooterTwo from './Main/FooterTwo'





const AllCars = () => {
   
  const [allCars, setAllCars] = useState([])

  const getCars = () => { 
    axios.get("/getAllCars")
    .then((res) => { 
          const docs = res.data
          const onlyCars = docs.filter(car => car.type === "car")
          setAllCars(onlyCars)
          console.log(onlyCars)
    })
    .catch((err) => console.log(err))
  }
   
   useEffect(() =>  { 
    getCars()
   }, [])      

  return (
    <> 

 
   
     <div className="flex">
             <Sidebar />
          <div className="ml-72">
              <PruebaDeNav />
          </div>
     </div> 

    


      <div className='mt-[40px] text-xs'>
          <h1 className='text-[35px] font-bold tracking-tight text-gray-900  xxxs:text-[27px] xxs:text-[30px] sm:text-[33px] md:text-[35px]'>Featured Cars of the Month</h1>    
      </div>

      
      <div className='mt-2 mb-2'>
          <Filters/>
          </div>

    

      <div className="flex flex-wrap 'mt-[6vh]">
           {allCars.map((car) => (
                 <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-full md:w-full sm:w-full xxs:w-full xxxs:w-full 2xs:w-full p-1 mt-3">
                  
                   <StructureCars car={car} />
                </div>))}
           </div> 
  
      <Footer />
      <FooterTwo/>
       
    </>
  
  )
}

export default AllCars
