
import PruebaDeNav from "./PruebaDeNav";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Sidebar from "./Sidebar";
import {Link} from "react-router-dom"
import { useContext } from 'react'
import {UserContext} from "../store/usercontext"

const Reviews = () => { 

  const [value, setValue] = React.useState(2);
  const userCtx = useContext(UserContext)


  return ( 
    <> 

    <div>
      <PruebaDeNav/>
      <Sidebar/>
    </div>   
  
        
       <div class="bg-white shadow rounded-md overflow-hidden sm:p-6 lg:p-8 mt-4">
              <div class="flex justify-between items-center">
                <h2 class="text-lg font-bold text-gray-800"> Review of: Marcos </h2>
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
                        <span class="author">John Doe</span>
                        <span class="date">on January 1, 2023</span>
                      </div>
                    
                      <div class="text-sm font-light text-gray-500">
                        I love the way this product looks and feels. It's exactly what I was looking for. I would definitely recommend this product to others.
                      </div>
                    </li> 
            </div>

          

            <div class="bg-white shadow rounded-md overflow-hidden sm:p-6 lg:p-8 mt-4">
              <div class="flex justify-between items-center">
                <h2 class="text-lg font-bold text-gray-800"> Review of: Marcos </h2>
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
                        <span class="author">John Doe</span>
                        <span class="date">on January 1, 2023</span>
                      </div>
                    
                      <div class="text-sm font-light text-gray-500">
                        I love the way this product looks and feels. It's exactly what I was looking for. I would definitely recommend this product to others.
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