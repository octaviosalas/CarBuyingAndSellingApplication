import * as React from 'react'
import { useState } from 'react'
import './App.css'
import AllCars from './components/AllCars'
import {Routes, Route} from "react-router-dom"
import CarDetail from './components/CarDetail'
import Register from './components/Register'
import Login from './components/Login'
import Main from './components/Main/Main'
import {UserProvider} from "./store/usercontext"
import Favs from './components/Favs'
import AboutUs from './components/AboutUs'
import FilteringByBrand from './components/Filters/FilteringByBrand'
import FilteringByLocation from './components/Filters/FilteringByLocation'

import FiveToTwentyFive from './components/Filters/FiveToTwentyFive'
import TwentyFiveToFifty from "./components/Filters/TwentyFiveToFifty"
import FiftyToSeventyFive from "./components/Filters/FiftyToSeventyFive"
import FilterSeventyFiveToHundred from "./components/Filters/FilterSeventyFiveToHundred" 
import FilterHundredToOnehundredAndfifty from "./components/Filters/FilterHundredToOnehundredAndfifty"
import FilterHundredToTwoHundred from "./components/Filters/FilterHundredToTwoHundred"




function App() {
 


  return (
 
             <div className='app'>
        <UserProvider>
              <Routes>
                <Route path="/main/:id" element={<Main/>}></Route> 
                <Route path="/allCars" element={<AllCars/>}></Route> 
                <Route path="/carDetail/:id" element={<CarDetail/>}></Route> 
                <Route path="/" element={<Register/>}></Route> 
                <Route path="/login" element={<Login/>}></Route> 
                <Route path="/favs/:id" element={<Favs/>}></Route>
                <Route path="/aboutUs" element={<AboutUs/>}></Route>  
                <Route path="/allCars/:brand" element={<FilteringByBrand/>}></Route>
                <Route path="/allCarsByLocation/:location" element={<FilteringByLocation/>}></Route>

                <Route path="/fiveToTwentyFive" element={<FiveToTwentyFive/>}></Route>

                <Route path="/twentyFiveToFifty" element={<TwentyFiveToFifty/>}></Route>

                <Route path="/FiftyToSeventyFive" element={<FiftyToSeventyFive/>}></Route>

                <Route path="/seventyFiveToHundred" element={<FilterSeventyFiveToHundred/>}></Route>

                <Route path="/hundredToOneFiftyHundred" element={<FilterHundredToOnehundredAndfifty/>}></Route>
                
                <Route path="/hundredToTwoHundred" element={<FilterHundredToTwoHundred/>}></Route>
              </Routes>
       </UserProvider>

         
      
              </div>
     
           
  
  )
}

export default App
