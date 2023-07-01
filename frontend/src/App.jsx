import * as React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import AllCars from './components/AllCars'


function App() {
 


  return (
 
             <div className='app'>
        
                    <Navbar/>
                    <Sidebar/>
                    <AllCars/>
                   
              
             </div>
           
  
  )
}

export default App
