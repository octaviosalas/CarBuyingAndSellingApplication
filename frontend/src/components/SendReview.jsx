import * as React from 'react';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'

const SendReview = () => { 

    const {id} = useParams()
    const [value, setValue] = React.useState(2);
    const [sellerName, setSellerName] = useState("")
    const [sellerId, setSellerId] = useState("")
    const [comment, setComment] = useState("")
    const [commentDate, setCommentDate] = useState("")

    const userCtx = useContext(UserContext)

    function getActualDate() {
        const fechaActual = new Date();
        const dia = fechaActual.getDate();
        const mes = fechaActual.getMonth() + 1; 
        const año = fechaActual.getFullYear();
      
        // Formato deseado: dd/mm/yyyy
        return `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${año}`;
      }

    useEffect(() => { 
        axios.get(`/getOneCar/${id}`)
             .then((res) =>  {
                console.log(res.data)
                res.data.map((c) => { 
                  setSellerName(c.seller)
                  setSellerId(c.sellerId)
                })           
             })
             .catch((err) => console.log(err))
             setCommentDate(getActualDate())
    }, [])   

    const sendMyReview = () => { 
        console.log("sgbkagdi")
        const myReview = ( { 
            criticalName: userCtx.userName,
            criticalId: userCtx.userId,
            stars: value,
            evaluatedId: sellerId,
            evaluatedName: sellerName,
            comment: comment,
            commentDate: commentDate
        })
        axios.post("/sendReview", myReview)
             .then((res) => { 
                console.log(res.data)
             })
             .catch((err) => { 
                console.log(err)
             })
    }


   return ( 
      <div className='mt-4'>
            <Box sx={{ '& > legend': { mt: 2 },}} >
                <Typography component="legend"><b>Rate the seller's attention</b> </Typography>
                <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
            </Box>
            <textarea type="text" className='w-full ml-8 text-center' placeholder={`Leave a comment about ${sellerName} that will help other users...`} onChange={(e) => setComment(e.target.value)}></textarea> 
                <div className='mt-2'>
                    <button className=" cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => sendMyReview()}> 
                    Send Review 
                    </button>
                </div>  
   </div>   
   )
}

export default SendReview