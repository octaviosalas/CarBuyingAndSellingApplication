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
import SendReview from "./SendReview";

/*criticalName: { 
        type: String
    }, 
    criticalId: {  
        type: String
    },
    stars: { 
        type: String
    },
    evaluatedId: { 
        type: String
    }, 
    evaluatedName: { 
        type: String
    },
    comment: { 
        type: String
    },
    commentDate: { 
        type: String
    }, */

const Reviews = () => { 

  const [value, setValue] = React.useState(2);
  const [sellerImage, setSellerImage] = useState("")
  const [sellerName, setSellerName] = useState("")
  const [sellerId, setSellerId] = useState("")
  const [reviewsAboutSeller, setReviewsAboutSeller] = useState([])
  const [noReviews, setNoReviews] = useState(false)
  const [sendOpinion, setSendOpinion] = useState(false)





  const userCtx = useContext(UserContext)
  const {id} = useParams()


      useEffect(() => { 
        axios.get(`/getUserById/${id}`)
              .then((res) => { 
                const docs = res.data
                console.log(docs)
                docs.map((d) => { 
                  setSellerImage(d.profileImage)
                  setSellerName(d.name)
                  setSellerId(d._id)
                })
              })
              .catch((err) => { 
                console.log(err)
              })
      }, [])

      useEffect(() => { 
        axios.get(`http://localhost:4000/getReviews/${sellerId}`)
            .then((res) => { 
              const docs = res.data
              if(docs.length === 0) { 
                setNoReviews(true)
              } else { 
                setReviewsAboutSeller(docs)
              }
            })
            .catch((err) => { 
              console.log(err)
            })
      }, [sellerId])

      

      


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
            
           {noReviews ? <>
                          <div className="mt-20">
                             <h5> <b>{sellerName} still has no opinions regarding his care. In case you have  interacted, you can leave one.</b> </h5> 
                             <button className="btn bt-primary bg-indigo-600 text-white mt-4" onClick={() => setSendOpinion(true)}>Review this seller</button>
                          </div>
                        </> : null }

            {sendOpinion ? <SendReview/> : null}            

      { reviewsAboutSeller.map((rev) => 
              (  <div class="bg-white shadow rounded-md overflow-hidden sm:p-6 lg:p-8 mt-4">
                  <div class="flex justify-between items-center">
                    <h2 class="text-lg font-bold text-gray-800"> Review of: <b className="text-[15px]">{rev.criticalName}</b> </h2>
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
                                  <Rating name="read-only" value={rev.stars} readOnly />
                                </Box>
                            </div>
                          </div>
                        </div>
                        <div class="text-sm font-light text-gray-500">
                        
                          <span class="date">Opinion send: {rev.commentDate}</span>
                        </div>
                      
                        <div class="text-sm font-light text-gray-500">
                         {rev.comment}
                        </div>
                      </li> 
                 </div>
          ))}

            <div className="mt-4">
             <Link to={`/main/${userCtx.userId}`}><p>Go Main</p></Link> 
            </div>
    </>
    
  )
}

export default Reviews;