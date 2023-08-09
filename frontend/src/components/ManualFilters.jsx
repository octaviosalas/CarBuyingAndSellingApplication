import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import StructureCars from './StructureCars'
import PruebaDeNav from './PruebaDeNav'
import Sidebar from './Sidebar'
import Footer from './Main/Footer'
import FooterTwo from './Main/FooterTwo'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';


const ManualFilters = () => {
    
    const [carsFiltered, setCarsFiltered] = useState("")
    const [noCars, setNoCars] = useState(false)
    const [stopLoad, setStopLoad] = useState(true)

    useEffect(() => { 
        setTimeout(() => { 
            console.log(localStorage.getItem("carBrand"))
            console.log(localStorage.getItem("carMaxPrice"))
            console.log(localStorage.getItem("carSeniority"))
            console.log(localStorage.getItem("carMaxKilometres"))
            console.log(localStorage.getItem("carLocation"))
        }, 1000)
    }, [])

    useEffect(() => { 
       axios.get("/getAllCars")
            .then((res) => {  
                const docs = res.data
                console.log(docs)
                if(docs.length === 0) { 
                    setNoCars(true)
                } else { 
                    const userFilters = docs.filter(car => car.brand === localStorage.getItem("carBrand") && car.price <= localStorage.getItem("carMaxPrice") && car.year >= localStorage.getItem("carSeniority") && 
                    car.kilometres <= localStorage.getItem("carMaxKilometres") && car.location === localStorage.getItem("carLocation"))
                    setCarsFiltered(userFilters)
                    setTimeout(() => { 
                        setStopLoad(false)
                    }, 600)
                }              
            })
            .catch((err) => { 
                console.log(err)
            })
    }, [])

    
    useEffect(() => { 
          setTimeout(() => { 
              console.log(carsFiltered)
          }, 1500)
     }, [carsFiltered])

  return (
    <div>
        <PruebaDeNav/>
        <Sidebar/>


    {noCars ? <p><b>We do not have available cars that meet the filters you applied for your search. Please try other filters</b></p> : null}
    {stopLoad ? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> :  <>{carsFiltered.map((c) => <StructureCars car={c}/>)} </>}
          
           { /*  <div> 
                <div>
                    <h2 className='text-[20px]'><b>We find cars that match the applied filters</b></h2>
                    <p className='mt-4 text-gray-400'>You are getting closer to finding your ideal used.</p>
                </div>
                 {carsFiltered.map((c) => <StructureCars car={c}/>)}
            </div> 

            <div className='mt-12'>
                <Link to={"/allCars"}><p>Go Main</p></Link> 
                <Footer/>
                <FooterTwo/>
            </div>
          </>
         } */}    
    </div>
  )
}

export default ManualFilters
