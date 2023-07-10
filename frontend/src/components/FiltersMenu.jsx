import React from "react"
import { useState } from 'react'
import Filters from "./Filters"

const Prueba = () => {

    const [menu, setMenu] = useState(false)

    const openMenu = () => { 
        setMenu(true)
    }

  return (
    <>
    <div className="absolute inset-2   items-center justify-center">
    <div className="relative z-10">
    <div className="flex">
      <button onClick={() => openMenu()}>Search By Filter</button>
    </div>
  </div>
    {menu ? <div>
      <ul className="menu xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
      <li>
    <a><Filters/></a>
   
  </li>
  <li>
    <a>Brand</a>
    <ul>
      <li><a>Volkswagen</a></li>
      <li><a>Ford</a></li>
      <li><a>Suzuki</a></li>
      <li><a>Fiat</a></li>
      <li><a>Mercedes Benz</a></li>
      <li><a>Bmw</a></li>
      <li><a>Audi</a></li>
      <li><a>Hyundai</a></li>
      <li><a>Any Brand</a></li>
    </ul>
  </li>
  <li>
    <a>Kilometres</a>
    <ul>
      <li><a> 0 to 15,000 km </a> </li>
      <li><a>15,000 to 40,000 km</a></li>
      <li><a>40,000 to 70,000 km </a></li>
      <li><a>70,000 to 100,000 km </a></li>
      <li><a>100,000 to 130,000 km </a></li>
      <li><a>130,000 to 160,000 km </a></li>
      <li><a>160,000 to 190,000 km </a></li>
      <li><a>190,000 to 215,000 km </a></li>
      <li><a>215,0000 to 400,000 km </a></li>
    </ul>
  </li>
  <li>
    <a>Location</a>
   
    <ul>
      <li><a>Buenos Aires</a></li>
      <li><a>Catamarca</a></li>
      <li><a>Chaco</a></li>
      <li><a>Cordoba</a></li>
       <li><a>Corrientes</a></li>
      <li><a>Entre Rios </a></li>
       <li><a>Formosa</a></li>
       <li><a>Jujuy</a></li>
      <li><a>La Pampa</a></li>
      <li><a>La Rioja</a></li>
      <li><a>Mendoza</a></li>
      <li><a>Misiones</a></li>
      <li><a>Neuquen</a></li>
      <li><a>Salta</a></li>
      <li><a>San Juan </a></li>
      <li><a>San Luis</a></li>
      <li><a>Santa Fe</a></li>
      <li><a>Santa Cruz</a></li>
    </ul>
  </li>
 
</ul>
    </div> : null}
    </div>

   
    </>
    
  )
}

export default Prueba
