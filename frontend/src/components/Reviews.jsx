
import PruebaDeNav from "./PruebaDeNav";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Reviews = () => { 

  const [value, setValue] = React.useState(2);


  return ( 
    <> 

    <div>
      <PruebaDeNav/>
    </div>   
        <div className="mt-24">
           <a href="#" class="btn btn-primary">Write a review</a>
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
                      <div class="text-lg font-bold text-gray-800">
                        This product is amazing!
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
                      <div class="text-lg font-bold text-gray-800">
                        This product is amazing!
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
                      <div class="text-lg font-bold text-gray-800">
                        This product is amazing!
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
                      <div class="text-lg font-bold text-gray-800">
                        This product is amazing!
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
                      <div class="text-lg font-bold text-gray-800">
                        This product is amazing!
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
                      <div class="text-lg font-bold text-gray-800">
                        This product is amazing!
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
                      <div class="text-lg font-bold text-gray-800">
                        This product is amazing!
                      </div>
                      <div class="text-sm font-light text-gray-500">
                        I love the way this product looks and feels. It's exactly what I was looking for. I would definitely recommend this product to others.
                      </div>
                    </li> 
            </div>
    </>
    
  )
}

export default Reviews;