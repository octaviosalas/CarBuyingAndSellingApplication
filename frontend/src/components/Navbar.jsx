import React, { useEffect } from 'react'
import me from "../img/me.jpg"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Filters from './Filters';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'
import { useParams } from 'react-router-dom';
import axios from "axios"

const Navbar = () => {

    
   const userCtx = useContext(UserContext)
   const {id} = useParams()

   useEffect(() => { 
      axios.get(`http://localhost:4000/getUserById/${id}`)
           .then((res) => console.log(res.data))
           .catch((err) => console.log(err))
   }, [])



  return (
    <div className="navbar   bg-indigo-600 w-full fixed top-0 left-0 right-0 main-content z-50">
    <div className="flex-1 ml-14">
      <Link to={"/main"}><HomeIcon className='cursor-pointer ml-5  text-black'/> </Link>
      <Filters />
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
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar
