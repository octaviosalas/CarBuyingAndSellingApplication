import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'

const Chats = () => {

    const userCtx = useContext(UserContext)
    const userId = userCtx.userId

    useEffect(() => { 
       axios.get(`http://localhost:4000/getMessages/${userId}`)
            .then((res) => { 
                console.log(res.data)
                userCtx.updateUserMessages(res.data)
                const msj = userCtx.userMessages
                 msj.forEach((message, index) => {
                    console.log(`Message ${index + 1}:`, message);
                  });
 
                setTimeout(() => { 
                    console.log(userCtx.userMessages)
                }, [])
            })
            .catch((err) => console.log(err))
    }, [])

  return (
    <div>
                  
    </div>
  )
}

export default Chats
