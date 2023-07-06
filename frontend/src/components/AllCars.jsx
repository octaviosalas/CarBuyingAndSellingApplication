import React from 'react'
import axios from "axios"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { useEffect, useState } from 'react'
import StructureCars from './StructureCars'
import Main from './Main'
import Footer from './Footer'

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
     <Sidebar />
      <Main />
     

    <div className='mt-14 text-xs'>
       <h1>Featured Cars of the Month</h1>
    </div>
      <div className="flex flex-wrap">
           {allCars.map((car) => (
                <div className="w-1/2 p-2">
                   <StructureCars car={car} />
                </div>))}
     </div>
  

       
    </>
  
  )
}

export default AllCars
