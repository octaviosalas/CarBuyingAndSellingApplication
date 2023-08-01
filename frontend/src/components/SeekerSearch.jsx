import React, { useEffect, useState } from 'react'
import PruebaDeNav from "./PruebaDeNav"
import Sidebar from "./Sidebar"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import StructureCars from './StructureCars'
import Filters from './Filters'

const SeekerSearch = () => {

    const params = useParams()
    const [searchResults, setSearchResults] = useState([])
    const [notResults, setNotResults] = useState(false)

    useEffect(() => { 
        axios.get(`/getCarsBySearch/${params.searchParam}`)
             .then((res) => { 
                console.log(res.data)
                if(res.data.length === 0) { 
                    setNotResults(true)
                } else { 
                    setSearchResults(res.data)
                }
             })
             .catch((err) => console.log(err))
    }, [params.searchParam])

  return (
    <div>
        <PruebaDeNav/>
        <Sidebar/>

        {notResults ? <p>We did not find results for your search "<b>{params.searchParam}</b>". Try another</p> : 
         
         <>
            <div>
                <h3>Results for your search "<b>{params.searchParam}</b>"</h3>
                <div className='mt-4'>
                <Filters/>
                </div>          
            </div>

        <div>
            {searchResults.map((r) => <StructureCars car={r}/>)}
        </div>      
         </>
        
        }
   
    </div>
  )
}

export default SeekerSearch
