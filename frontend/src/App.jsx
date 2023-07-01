import * as React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import AllCars from './components/AllCars'
import {Routes, Route} from "react-router-dom"
import CarDetail from './components/CarDetail'


function App() {
 


  return (
 
             <div className='app'>
        
                    <Navbar/>
                    <Sidebar/>
                    
              <Routes>
                <Route path="/main" element={<AllCars/>}></Route> 
                <Route path="/carDetail/:id" element={<CarDetail/>}></Route> 
              </Routes>
                    
                   
              
             </div>
           
  
  )
}

export default App
