import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'
import axios from "axios"
import PruebaDeNav from "./PruebaDeNav"
import SideBar from "./Sidebar"
import { Link } from 'react-router-dom'
import StructureCars from './StructureCars'
import StructureFavs from './StructureFavs'


const Favs = () => {
     

    const [carData, setCarData] = useState([])
    const [loadingData, setLoadingData] = useState(false)
    const [msgJNoFavs, setMsgNoFavs] = useState(true)
   

    const userCtx = useContext(UserContext)
    console.log(userCtx.userId)

    const getUserFavs = () => { 
        axios.get(`http://localhost:4000/getFavs/${userCtx.userId}`)
             .then((res) => { 
              if(res.data.length === 0) { 
                setMsgNoFavs(false)
              }
                console.log(res.data)
                setCarData(res.data)
             })
             .catch((err) => { 
                console.log(err)
             })
    }

    useEffect(() => { 
       getUserFavs()
    }, [])

  return (
    <div className="bg-white">
        <PruebaDeNav/>
        <SideBar/> 
        <div>
           {msgJNoFavs ? 
             <>
                {carData.map((car) => <StructureFavs favCar={car}/>)}  
             </>
                : 
               <div>
                <p>You don`t Have Favs saved.</p>
               </div>
               



            
                
            }

         
        </div>
    </div>
  )
}

export default Favs
