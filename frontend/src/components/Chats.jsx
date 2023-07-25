import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'
import io from "socket.io-client"
import PruebaDeNav from "./PruebaDeNav"
import Sidebar from "./Sidebar"




const Chats = () => {

    const userCtx = useContext(UserContext)
    const userId = userCtx.userId
    const [quantityMessages, setQuantityMessages] = useState(null)
    

    useEffect(() => { 
       axios.get(`http://localhost:4000/getMessages/${userId}`)
            .then((res) => { 
                 console.log(res.data)
                 setQuantityMessages(res.data.length)
                 userCtx.updateUserMessages(res.data)
                 setTimeout(() => { 
                  console.log(userCtx.userMessages)
                }, 1000)
            })
            .catch((err) => console.log(err))
    }, [])

  

    useEffect(() => { 
       console.log(quantityMessages)
    }, [quantityMessages])

  return (
    <div>
      <PruebaDeNav/>
      <Sidebar/>
           <div>
               <h3>Tenes {quantityMessages} ofertas por responder</h3>
           </div>
         
    </div>
  )
}

export default Chats
