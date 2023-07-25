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

  
  useEffect(() => { 
    axios.get(`http://localhost:4000/getMessages/${userId}`)
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

      

    
   /*const searchId = () => { 
     offersReceived.map((o) => { 
       const dealsOnThisCar = 

       console.log("El _id es" +   o.publicationId)
       if( o.publicationId === car._id) { 
        console.log("HAY COINDIDENCIAS")
       }
     })
   }    */



  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mt-4">
    <figure><img src={car.img[0]} alt="Album" className='w-[200px] h-[200px]'/></figure>
    <div className="card-body">
        <div className='flex'>
            <div>
              <h2 className="card-title">{car.name}</h2>
            </div>
            <div className='ml-10 top-0'>
              <div className="badge badge-primary bg-red-500 text-black border-none">Posted on: {car.publicationDate}</div>
            </div>
            <hr />
        </div>

   
      <div className="card-actions  justify-center mt-[25px]">
        <hr />
      <Link to={`/carDetail/${car.id}`}><button className="btn btn-primary">View More</button> </Link>
      </div>

      <div>
          { thereAreOffers ?  <button className="btn" onClick={() => goMyChats()}> You have Oferts <div className="badge badge-secondary">+{quantityOferts}</div> </button> : null}
      </div>
    </div>
  </div>
  )
}

export default StructureMyPublications
