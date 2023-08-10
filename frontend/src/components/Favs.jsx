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
import Footer from './Main/Footer'
import FooterTwo from './Main/FooterTwo'



const Favs = () => {
     

    const [carData, setCarData] = useState([])
    const [loadingData, setLoadingData] = useState(false)
    const [msgJNoFavs, setMsgNoFavs] = useState(true)
    const [logUser, setLogUser] = useState(false)

    const userCtx = useContext(UserContext)
    console.log(userCtx.userId)

   

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
   



    const getUserFavs = () => { 
        axios.get(`/getFavs/${userCtx.userId}`)
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

        {logUser ? <div>
                  <dialog id="my_modal_1" className="modal">
                  <form method="dialog" className="modal-box">
                     <h3 className="font-bold text-lg">You are not Registered!</h3>
                     <p className="py-4">You must have an account to have Favorites</p>
                     <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to={"/register"}><button className="btn">Create my Account</button></Link>                
                     </div>
                  </form>
                  </dialog>
        </div> : null}


        <div>
           {msgJNoFavs ? 
             <> 
             <div className='mt-4'>
                <h3 className='text-[19px]'><b>Hi {userCtx.userName} these are yours Favs!</b> </h3>
             </div>
             <div className='flex m-4'>
               {carData.map((car) => <StructureFavs favCar={car}/>)}  
             </div>
               
                <div className=' bottom-0 left-0 right-0 z-50'>
                
                <FooterTwo/>
            </div>
             </>
                : 
                <>
                 <div>
                    <p><b>At the moment, you don`t Have Favs saved.</b></p>
                    <Link to={"/allCars"}><p className='mt-4'>Go To save Favs</p></Link>
                 </div>

              
                </>
              
            }

         
        </div>
    </div>
  )
}

export default Favs
