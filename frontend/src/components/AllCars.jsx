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
    axios.get("http://localhost:4000/getAllCars")
    .then((res) => { 
          setAllCars(res.data)
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
          <h1 className='text-[35px] font-bold tracking-tight text-gray-900 '>Featured Cars of the Month</h1>    
      </div>

      
      <div className='mt-2 mb-2'>
          <Filters/>
          </div>

    

      <div className="flex flex-wrap 'mt-[6vh]">
           {allCars.map((car) => (
                <div className="w-full p-1 mt-3">
                  
                   <StructureCars car={car} />
                </div>))}
           </div> 
  
      <Footer />
      <FooterTwo/>
       
    </>
  
  )
}

export default AllCars
