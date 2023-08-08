import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import fav from "../img/fav.png"
import axios from "axios"
import { useContext } from 'react';
import { UserContext } from '../store/usercontext';
import { useNavigate } from 'react-router-dom';

const StructureMyPublications = ({car}) => {


  const navigate = useNavigate()
  const userCtx = useContext(UserContext)
  const userId = userCtx.userId
  
  const [thereAreOffers, setThereAreOffers] = useState(false)
  const [quantityOferts, setQuantityOferts] = useState(null)
  const [showStats, setShowStats] = useState(true)
  const [quantityVisits, setQuantityVisits] = useState(null)

  
  useEffect(() => { 
    axios.get(`/getMessages/${userId}`)
           .then((res) => { 
              console.log(res.data)
              const seleccionando = res.data.filter(oferts => oferts.publicationId === car._id)
              setQuantityOferts(seleccionando.length);
              if(seleccionando.length !== 0) { 
                  console.log("HAY  OFERTA")
                  setThereAreOffers(true)
              } else if(seleccionando.length === 0) { 
                console.log("No hay ofertas")
              }
           })
           .catch((err) => console.log(err))
       }, [])

       const goMyChats = () => { 
          navigate(`/myChats/${userCtx.userId}`)
       }

       const getMyStats = () => { 
         axios.get(`/getPublicationStats/${car._id}`)
              .then((res) => { 
                console.log(res.data)
                setQuantityVisits(res.data.length)
              })
              .catch((err) => { 
                console.log(err)
              })
              setTimeout(() => { 
                setShowStats(false)
              }, 300)
       }





  return (
    <div className="card lg:card-side md:card-side sm:card-side xxs:card-side  shadow-xl mt-4">
    <figure><img src={car.img[0]} alt="Album" className='w-[200px] h-[200px] border shadow-xl '/></figure>
    <div className="card-body">
        <div className=''>
            <div className="ml-[48px]">
            <Link to={`/carDetail/${car.id}`}> <h2 className="card-title">{car.name}</h2></Link>
            </div>
            <div className='ml-10 top-0'>
              <div className="badge badge-primary bg-white  text-black border-none">Posted on: {car.publicationDate}</div>
            </div>
            
        </div>

   
    {showStats ?  <div className="card-actions  justify-center mt-[25px]">
        <hr />
      <button className="btn btn-primary" onClick={() => getMyStats()}>See Stats</button> 
      </div> : 
            <>
              <div className="stats shadow">
                      <div className="stat">
                        <div className="stat-figure text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Clicks</div>
                        <div className="stat-value text-primary">{quantityVisits}</div>
                      </div>
                
                      <div className="stat">
                        <div className="stat-figure text-secondary">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Received messages</div>
                        <div className="stat-value text-secondary">{quantityOferts}</div>
                      </div>
                      
                      <div className="stat">
                        <div className="stat-figure text-secondary">
                          <div className="avatar online">
                            <div className="w-16 rounded-full">
                              <img src={userCtx.userProfileImage}/>
                            </div>
                          </div>
                        </div>
                        
                      </div>
               </div>
               <p className='text-indigo-600 cursor-pointer mt-4' onClick={() => setShowStats(true)}> <b>Close Stats</b></p>
            </>}

      <div>
          { thereAreOffers ?  <button className="btn text-black bg-white border-none" onClick={() => goMyChats()}> You have Ofertss <div className="badge badge-secondary">+{quantityOferts}</div> </button> : null}
      </div>
    </div>
  </div>
  )
}

export default StructureMyPublications
