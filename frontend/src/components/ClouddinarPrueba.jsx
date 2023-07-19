/*import React from 'react'
import Dropzone from "react-dropzone"
import { useState } from 'react'


const ClouddinarPrueba = () => {

    const [imagenes, setImagenes] = useState({array : {}})
    const [loading, setLoading]= useState("")


    const handleDropImage = (files) => { 
       const uploaders = files.map((file) => { 
         const formData = new FormData()
         formData.append("file", file)
         formData.append("tags", `codeinfuse, medium, gist`)
         formData.append("upload_preset", "App-Cars")
         formData.append("api_key", "687985773113572")
         formData.append("timestamp", (Date.now() / 1000 / 0))
         setLoading("true")
         return axios
          .post("https://api.cloudinary.com/v1_1/dgheotuij/image/upload", formData, ( 
            headers: {"X-Requested-With": "XMLHttpRequest"} 
         ))
       })
       .then((res))
    } 

  return (
    <div>
           <Dropzone classname="dropzone" onChange={(e) => setImagenes(e.target.value)} value={imagenes} onDrop={handleDropImage}>
               <div>
                    <p>Inserta tu imagen</p>
                    <input type="file"></input>
               </div>
           </Dropzone>
    </div>
  )
}

export default ClouddinarPrueba */
