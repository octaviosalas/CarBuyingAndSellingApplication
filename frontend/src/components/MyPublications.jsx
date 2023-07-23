import React from 'react'
import PruebaDeNav from "./PruebaDeNav"
import SideBar from "./Sidebar"
import axios from "axios"
import {useEffect, useState} from "react"
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'
import StructureMyPublications from './StructureMyPublications'
import { Link } from 'react-router-dom'

const MyPublications = () => {

    const userCtx = useContext(UserContext)
    const [publications, setPublications] = useState([])
    const [noPublications, setNoPublications] = useState(false)

    const getPublicationsOfUser = () => { 
      axios.get(`http://localhost:4000/getPublications/${userCtx.userId}`)
      .then((res) => { 
       console.log(res.data)
       if(res.data.length === 0) { 
        setNoPublications(true)
       } else { 
        setPublications(res.data)
       }
    
      })
      .catch((err) => { 
       console.log(err)
      })
    }

    useEffect(() => { 
      getPublicationsOfUser()    
    }, [])

  return (
    <div>
       <PruebaDeNav/>
       <SideBar/>

       <div>
      
         {noPublications ? 
         
          <>
           <div>
              <h5>At the moment you dont have publications</h5>
           </div>

           <div className='mt-[20px]'>
              <Link to={"/buyMyCar"}><button>I want to sell my Car</button></Link>
           </div>
         
          </> 
           :

           <>
           <h5>At the moment you have published the following vehicles.</h5>
           {publications.map((p) => <StructureMyPublications car={p}/>)}  
           </>
         
        }


         
       </div>
    </div>
  )
}

export default MyPublications
