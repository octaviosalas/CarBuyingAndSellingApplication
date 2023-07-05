import React, { useEffect } from 'react'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Register() {


  
  const [name, setName] = useState("")
  const [telephone, setTelephone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [backendMsj, setBackendMsj] = useState("")
  const [showBackendMsj, setShowBackendMsj] = useState(false)

  const navigate = useNavigate()

  const registerAccount = () => { 
    const newUser = ({ 
      name: name,
      telephone: telephone,
      email: email,
      password: password
    })
    axios.post("http://localhost:4000/register", newUser)
         .then((res) =>  { 
          console.log(res.data) 
          setTimeout(() => { 
             navigate("/login")
          }, 500)
          console.log(res.data)
          setBackendMsj(res.data.message)
          setShowBackendMsj(true)
          if(res.data.message === "Usuario creado correctamente") { 
            setTimeout(() => { 
              navigate("/login")
           }, 1300)
          }
         })
         .catch((err) => console.log(err))
         
  }


  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div   className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"aria-hidden="true">
        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{  clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%', }} />
      </div>

       
     <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">Create an Acount</h2>
        <p className="mt-2 text-lg leading-8 text-slate-500"> You can create an account to start buying or selling vehicles!  </p>
      </div>
      
      
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
         
         
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">  Complete Name </label>
            <div className="mt-2.5">
              <input  type="text"  name="company" id="company" autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setName(e.target.value)} />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900"> Email </label>
            <div className="mt-2.5">
              <input  type="email" name="email" id="email"  autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900"> Phone number </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only"> Country
                </label>
                <select id="country"  name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                  <option>AR</option>
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"  aria-hidden="true" />
              </div>
              <input type="tel" name="phone-number"  id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setTelephone(e.target.value)}/>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">  Password  </label>
            <div className="mt-2.5">
              <input  name="password" type="password"  id="password" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={''} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
   
        </div>
        <div className="mt-10">
          <button  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => registerAccount()}> Register </button>
        </div>

        <div>
          <Link to={"/login"}><p className='cursor-pointer mt-4 textdecora underline'>I have an Acount</p></Link> 
        </div>

        <div>
            {showBackendMsj && <div className="toast"><div className="alert alert-success  bg-indigo-300 text-black"><span>{backendMsj}</span></div></div>}
        </div>
     
    </div> 
  )
}