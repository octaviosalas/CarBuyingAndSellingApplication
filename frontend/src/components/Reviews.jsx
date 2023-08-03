import PruebaDeNav from "./PruebaDeNav";
import { useState, useEffect } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Sidebar from "./Sidebar";
import {Link} from "react-router-dom"
import { useContext } from 'react'
import {UserContext} from "../store/usercontext"
import axios from "axios"
import { useParams } from "react-router-dom";

const Reviews = () => { 

  const [value, setValue] = React.useState(2);
  const [sellerImage, setSellerImage] = useState("")
  const [sellerName, setSellerName] = useState("")
  const userCtx = useContext(UserContext)
  const {id} = useParams()
  console.log(id)

  useEffect(() => { 
     axios.get(`http://localhost:4000/getUserById/${id}`)
          .then((res) => { 
            const docs = res.data
            docs.map((d) => { 
              setSellerImage(d.profileImage)
              setSellerName(d.name)
            })
           
          })
          .catch((err) => { 
            console.log(err)
          })
  })

  useEffect(() => { 
    console.log(sellerImage)
  }, [sellerImage])


  return ( 
    <> 

    <div>
      <PruebaDeNav/>
      <Sidebar/>
    </div>   

    
          <div className="avatar">
            <div className="w-[120px] rounded-full">
              <img src={sellerImage} />
            </div>
          </div>

          <div className="mt-4">
             <p> Reputation about <b>{sellerName}</b></p>
          </div>
    
  
        
       <div class="bg-white shadow rounded-md overflow-hidden sm:p-6 lg:p-8 mt-4">
              <div class="flex justify-between items-center">
                <h2 class="text-lg font-bold text-gray-800"> Review of: <b className="text-[15px]">Susana Weidgant</b> </h2>
              </div>
                    <li class="flex flex-col justify-between items-center">
                      <div class="flex items-center">
                        <div class="text-lg font-bold text-gray-800">
                          <i class="fas fa-star text-yellow-500"></i>
                          <span class="sr-only">Rating</span>
                        </div>
                        <div class="rating flex flex-row justify-between items-center">
                          
                          <div class="text-sm font-light text-gray-500">
                              <Box  sx={{'& > legend': { mt: 2 }, }}>
                                <Rating name="read-only" value={value} readOnly />
                              </Box>
                          </div>
                        </div>
                      </div>
                      <div class="text-sm font-light text-gray-500">
                      
                        <span class="date">on January 5, 2023</span>
                      </div>
                    
                      <div class="text-sm font-light text-gray-500">
                      I sent him a message, he responded kindly. But then he didn't answer me again.
                      </div>
                    </li> 
            </div>

          

            <div class="bg-white shadow rounded-md overflow-hidden sm:p-6 lg:p-8 mt-4">
              <div class="flex justify-between items-center">
                <h2 class="text-lg font-bold text-gray-800">Review of: <b className="text-[15px]">Daniel Pentz </b> </h2>
              </div>
                    <li class="flex flex-col justify-between items-center">
                      <div class="flex items-center">
                        <div class="text-lg font-bold text-gray-800">
                          <i class="fas fa-star text-yellow-500"></i>
                          <span class="sr-only">Rating</span>
                        </div>
                        <div class="rating flex flex-row justify-between items-center">
                          
                          <div class="text-sm font-light text-gray-500">
                              <Box  sx={{'& > legend': { mt: 2 }, }}>
                                <Rating name="read-only" value={value} readOnly />
                              </Box>
                          </div>
                        </div>
                      </div>
                      <div class="text-sm font-light text-gray-500">
                        
                        <span class="date">on March 13, 2023</span>
                      </div>
                    
                      <div class="text-sm font-light text-gray-500">
                      Honestly, I did not like the deal, he responded badly and then disappeared
                      </div>
                    </li> 
            </div>

            <div className="mt-4">
             <Link to={`/main/${userCtx.userId}`}><p>Go Main</p></Link> 
            </div>
    </>
    
  )
}

export default Reviews;