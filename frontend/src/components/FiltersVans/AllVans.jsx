import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'
import StructureCars from '../StructureCars'
import PruebaDeNav from '../PruebaDeNav'
import Sidebar from '../Sidebar'
import Footer from '../Main/Footer'
import FooterTwo from '../Main/FooterTwo'
import Filters from '../Filters'






const AllVans = () => {

    const [allVans, setAllVans] = useState([])

  const getVans = () => { 
    axios.get("http://localhost:4000/getAllCars")
    .then((res) => {
          const docs = res.data
          const onlyVans = docs.filter(vans => vans.type === "van") 
          setAllVans(onlyVans)
         
    })
    .catch((err) => console.log(err))
  }
   
   useEffect(() =>  { 
    getVans()
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
          <h1 className='text-[35px] font-bold tracking-tight text-gray-900 '>All our Vans</h1>    
      </div>

      
      <div className='mt-2 mb-2'>
          <Filters/>
          </div>

    

      <div className="flex flex-wrap 'mt-[6vh]">
           {allVans.map((car) => (
                <div className="w-full p-1 mt-3">
                  
                   <StructureCars car={car} />
                </div>))}
           </div> 
  
      <Footer />
      <FooterTwo/>
       
    </>
  
  )
}

export default AllVans
