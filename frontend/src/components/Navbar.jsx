import React, { useEffect } from 'react'
import me from "../img/me.jpg"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Filters from './Filters';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useContext } from 'react';
import { UserContext } from '../store/usercontext';
import Prueba from './FiltersMenu';


const Navbar = () => {

  
   const {id} = useParams()
   const userCtx = useContext(UserContext)

   useEffect(() => { 
      axios.get(`http://localhost:4000/getUserById/${id}`)
           .then((res) => console.log(res.data))
           .catch((err) => console.log(err))
   }, [])



  return (
    <div className="navbar md:ml-10 xs:ml-10 sm:ml-10 xxs:ml-10 xxxs:ml-10 bg-indigo-500 2xl:w-[100%]  fixed top-0 left-0 right-0 main-content z-50">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <Prueba/>
        </ul>
      </div>
      
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
     
        <li tabIndex={0}>
          <details>
            <summary>Apply Search Filters</summary>
            <ul className="p-2">
              <Prueba/>
            </ul>
          </details>
        </li>
      
      </ul>
    </div>
    <div className="navbar-end">
    <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar xxxs:mr-[50px]">
          <div className="w-10 rounded-full ">
            <img src={me} />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 xxxs:mr-[50px]">
          <li><a className="justify-between"> Profile <span className="badge">New</span></a></li>
          <li><a>Settings</a></li>
          <Link to={`/main/${userCtx.userId}`}><li><p>Main</p></li></Link>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
  
}

export default Navbar






/*import React, { useEffect } from 'react'
import me from "../img/me.jpg"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Filters from './Filters';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useContext } from 'react';
import { UserContext } from '../store/usercontext';
import Prueba from './Prueba';


const Navbar = () => {

  
   const {id} = useParams()
   const userCtx = useContext(UserContext)

   useEffect(() => { 
      axios.get(`http://localhost:4000/getUserById/${id}`)
           .then((res) => console.log(res.data))
           .catch((err) => console.log(err))
   }, [])



  return (
    <div className="navbar ml-10   bg-indigo-500 w-[calc(100%-72px)] fixed top-0 left-0 right-0 main-content z-50">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    
    </div>
    <div className="navbar-center hidden lg:flex">
      
    <div className="">
      <Prueba />
    </div>
      

    </div>
    <div className="navbar-end">
       <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
       </div>
       <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={me} />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li><a className="justify-between"> Profile <span className="badge">New</span></a></li>
          <li><a>Settings</a></li>
          <Link to={`/main/${userCtx.userId}`}><li><p>Main</p></li></Link>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar
*/