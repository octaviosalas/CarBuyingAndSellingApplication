import React from 'react'
import PruebaDeNav from "./PruebaDeNav"
import SideBar from "./Sidebar"
import axios from "axios"
import {useEffect, useState} from "react"

const MyPublications = () => {
  return (
    <div>
       <PruebaDeNav/>
       <SideBar/>
    </div>
  )
}

export default MyPublications
