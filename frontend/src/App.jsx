import * as React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AllCars from './components/AllCars'
import {Routes, Route} from "react-router-dom"
import CarDetail from './components/CarDetail'
import Register from './components/Register'
import Login from './components/Login'


function App() {
 


  return (
 
             <div className='app'>
        
                    <Navbar/>
                    <Sidebar/>
                    
              <Routes>
                <Route path="/main" element={<AllCars/>}></Route> 
                <Route path="/carDetail/:id" element={<CarDetail/>}></Route> 
                <Route path="/" element={<Register/>}></Route> 
                <Route path="/login" element={<Login/>}></Route> 
              </Routes>
            
              </div>
             
            
           
  
  )
}

export default App
