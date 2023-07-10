import React from 'react'
import axios from "axios"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { useEffect, useState } from 'react'
import StructureCars from './StructureCars'
import Main from './Main/Main'
import Footer from './Main/Footer'
import Filters from './Filters'

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

 
   
     <Navbar/>
     <Sidebar/>

      <div className='mt-2 text-xs'>
          <h1>Featured Cars of the Month</h1>
      </div>

      <div className='mt-[6vh]'>
        <Filters />
      </div>

      <div className="flex flex-wrap 'mt-[6vh]">
           {allCars.map((car) => (
                <div className="w-full p-1 mt-3">
                   <StructureCars car={car} />
                </div>))}
           </div> 
  
      <Footer />
       
    </>
  
  )
}

export default AllCars
