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


const Navbar = () => {

  
   const {id} = useParams()
   const userCtx = useContext(UserContext)

   useEffect(() => { 
      axios.get(`http://localhost:4000/getUserById/${id}`)
           .then((res) => console.log(res.data))
           .catch((err) => console.log(err))
   }, [])



  return (
    <div className="navbar   bg-indigo-500 w-full fixed top-0 left-0 right-0 main-content z-50">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li tabIndex={0}>
        <details>
            <summary>Filter by brand</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>Filter by Year</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
        <details>
            <summary>Filter by location</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
      </ul>

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

const Navbar = () => {

  
   const {id} = useParams()
   const userCtx = useContext(UserContext)

   useEffect(() => { 
      axios.get(`http://localhost:4000/getUserById/${id}`)
           .then((res) => console.log(res.data))
           .catch((err) => console.log(err))
   }, [])



  return (
    <div className="navbar   bg-indigo-600 w-full fixed top-0 left-0 right-0 main-content z-50">
    <div className="flex-1 ml-14">
      <Link to={"/main"}><HomeIcon className='cursor-pointer ml-5  text-black'/> </Link>
    </div>
    <div>
      
    </div>
    <div className="flex-none gap-2">
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