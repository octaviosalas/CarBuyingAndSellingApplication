import * as React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; //importacion de bootstrap
import './App.css'
import AllCars from './components/AllCars'
import AllVans from './components/FiltersVans/AllVans'
import {Routes, Route} from "react-router-dom"
import CarDetail from './components/CarDetail'
import Register from './components/Register'
import Login from './components/Login'
import Main from './components/Main/Main'
import {UserProvider} from "./store/usercontext"
import Favs from './components/Favs'
import AboutUs from './components/AboutUs'
import ClouddinarPrueba from './components/ClouddinarPrueba'

import FilteringByBrand from './components/FiltersCars/FilteringByBrand'
import FilteringVansByBrand from './components/FiltersVans/FilteringVansByBrand'

import FilteringByLocation from './components/FiltersCars/FilteringByLocation'
import FilterVanByLocation from './components/FiltersVans/FilterVanByLocation'

import FiveToTwentyFive from './components/FiltersCars/FiveToTwentyFive'
import FiveToTwentyFiveVans from './components/FiltersVans/FiveToTwentyFiveVans'

import TwentyFiveToFifty from "./components/FiltersCars/TwentyFiveToFifty"
import TwentyFiveToFiftyVans from './components/FiltersVans/TwentyFiveToFiftyVans'

import FiftyToSeventyFive from "./components/FiltersCars/FiftyToSeventyFive"
import FiftyToSeventyFiveVans from './components/FiltersVans/FiftyToSeventyFiveVans'

import FilterSeventyFiveToHundred from "./components/FiltersCars/FilterSeventyFiveToHundred" 
import SeventyFiveToHundredVans from './components/FiltersVans/SeventyFiveToHundredVans'

import FilterHundredToOnehundredAndfifty from "./components/FiltersCars/FilterHundredToOnehundredAndfifty"
import HundredToHundredFiftyVans from './components/FiltersVans/HundredToHundredFiftyVans'

import FilterHundredToTwoHundred from "./components/FiltersCars/FilterHundredToTwoHundred"
import HundredFiftyToTwoHundredVans from './components/FiltersVans/HundredFiftyToTwoHundredVans'

import MyPublications from "./components/MyPublications"
import Chats from "./components/Chats"
import SeekerSearch from "./components/SeekerSearch"

function App() {
 


  return (
 
             <div className='app'>
        <UserProvider>
              <Routes>
                <Route path="/main/:id" element={<Main/>}></Route> 
                <Route path="/allCars" element={<AllCars/>}></Route> 
                <Route path="/allVans" element={<AllVans/>}></Route> 
                <Route path="/carDetail/:id" element={<CarDetail/>}></Route> 
                <Route path="/" element={<Register/>}></Route> 
                <Route path="/login" element={<Login/>}></Route> 
                <Route path="/favs/:id" element={<Favs/>}></Route>
                <Route path="/aboutUs" element={<AboutUs/>}></Route> 

                <Route path="/allCars/:brand" element={<FilteringByBrand/>}></Route>
                <Route path="/allVans/:brand" element={<FilteringVansByBrand/>}></Route>

                <Route path="/allCarsByLocation/:location" element={<FilteringByLocation/>}></Route>
                <Route path="/allVansByLocation/:location" element={<FilterVanByLocation/>}></Route>

                <Route path="/fiveToTwentyFive" element={<FiveToTwentyFive/>}></Route>
                <Route path="/fiveToTwentyFiveVans" element={<FiveToTwentyFiveVans/>}></Route>

                <Route path="/twentyFiveToFifty" element={<TwentyFiveToFifty/>}></Route>
                <Route path="/twentyFiveToFiftyVans" element={<TwentyFiveToFiftyVans/>}></Route>

                <Route path="/FiftyToSeventyFive" element={<FiftyToSeventyFive/>}></Route>
                <Route path="/FiftyToSeventyFiveVans" element={<FiftyToSeventyFiveVans/>}></Route>

                <Route path="/seventyFiveToHundred" element={<FilterSeventyFiveToHundred/>}></Route>
                <Route path="/seventyFiveToHundredVans" element={<SeventyFiveToHundredVans/>}></Route>

                <Route path="/hundredToOneFiftyHundred" element={<FilterHundredToOnehundredAndfifty/>}></Route>
                <Route path="/hundredToHundredFiftyVans" element={<HundredToHundredFiftyVans/>}></Route>

                
                <Route path="/hundredToTwoHundred" element={<FilterHundredToTwoHundred/>}></Route>
                <Route path="/hundredToTwoHundredVans" element={<HundredFiftyToTwoHundredVans/>}></Route>

                <Route path="/buyMyCar" element={<ClouddinarPrueba/>}></Route>
                <Route path="/myPublications" element={<MyPublications/>}></Route>
                <Route path="/myChats/:id" element={<Chats/>}></Route>
                <Route path="/seeker/:searchParam" element={<SeekerSearch/>}></Route>


              </Routes>
       </UserProvider>

         
      
              </div>
     
           
  
  )
}

export default App
