import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'
import PruebaDeNav from "./PruebaDeNav"
import Sidebar from "./Sidebar"
import {Link} from "react-router-dom"




const Chats = () => {

    const userCtx = useContext(UserContext)
    const userId = userCtx.userId
    const [quantityMessages, setQuantityMessages] = useState(null)
    const [offerts, setOfferts] = useState([])
    

    useEffect(() => { 
       axios.get(`http://localhost:4000/getMessages/${userId}`)
            .then((res) => { 
                 console.log(res.data)
                 setOfferts(res.data)
                 setQuantityMessages(res.data.length)
                 setTimeout(() => { 
                  console.log(userCtx.userMessages)
                }, 1000)
            })
            .catch((err) => console.log(err))
    }, [])

  

    useEffect(() => { 
       console.log(offerts)
    }, [offerts])

  return (
    <div>
      <PruebaDeNav/>
      <Sidebar/>



      <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
             <b>¡Congratulations! </b>You are getting closer to seeing your Vehicle!
            </h1>
            <p className="mt-6 text-sm leading-8 text-gray-600">
            The offers you accept will allow you to interact with the potential buyer..
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              
            </div>
          </div>
     
          

      <div className="overflow-x-auto">
  <table className="table w-[100vh] mt-[10vh]">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Vehicle</th>
        <th>Offert </th>
        <th>Date</th>
        <th>Quantity Offerts: {offerts.length}</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       {offerts.map((of) =>  { 
           return ( 
                  <tr key={of._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={of.interestedImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{of.interested}</div>
                       
                      </div>
                    </div>
                  </td>
                  <td>
                   {of.vehicle}
                    <br/>
                
                  </td>
                  <td>{of.amount} USD</td>
                  <td>{of.date}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Response</button>
                    <button className="btn btn-ghost btn-xs">Reject</button>
                  </th>
                </tr>
            )
       })}

     
    </tbody>
    {/* foot */}
    <tfoot>
      <tr >
       <p >Go Main</p>
      </tr>
    </tfoot>
    
  </table>
</div>
         
    </div>
  )
}

export default Chats
