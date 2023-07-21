import React from 'react'
import PruebaDeNav from "./PruebaDeNav"
import SideBar from "./Sidebar"
import axios from "axios"
import {useEffect, useState} from "react"
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'
import StructureMyPublications from './StructureMyPublications'

const MyPublications = () => {

    const userCtx = useContext(UserContext)
    const [publications, setPublications] = useState([])

    const getPublicationsOfUser = () => { 
      axios.get(`http://localhost:4000/getPublications/${userCtx.userId}`)
      .then((res) => { 
       console.log(res.data)
       setPublications(res.data)
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
          <h5>At the moment you have published the following vehicles.</h5>
          {publications.map((p) => <StructureMyPublications car={p}/>)}
       </div>
    </div>
  )
}

export default MyPublications
