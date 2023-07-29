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
    const [logUser, setLogUser] = useState(false)

   

     function openModal() {
      window.my_modal_1.showModal();
    }

    useEffect(() => {
      if(userCtx.userId === null) { 
        setLogUser(true)
        setTimeout(() => { 
            openModal()
        }, 300)
      }
   }, [])
    

    console.log("El Nombre del contexto: " +   userCtx.userName)

    const getPublicationsOfUser = () => { 
      axios.get(`/getPublications/${userCtx.userId}`)
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
        
         {logUser ? <div>

            <dialog id="my_modal_1" className="modal">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">You are not Registered!</h3>
                <p className="py-4">You must have an account to receive messages</p>
                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <Link to={"/"}><button className="btn">Create my Account</button></Link>
             
                </div>
              </form>
            </dialog>
                    </div> : null}
          
      
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
