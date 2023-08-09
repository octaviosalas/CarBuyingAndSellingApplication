import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'
import PruebaDeNav from './PruebaDeNav'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Login() {

  const [agreed, setAgreed] = useState(false)
  const [email, setEmail] = useState(false)
  const [password, setPassword] = useState(false)
  const [backendMsj, setBackendMsj] = useState("")
  const [showBackendMsj, setShowBackendMsj] = useState(false)
  const navigate = useNavigate()
  const userCtx = useContext(UserContext)


   const logIn = () => { 
     const userData = ( { 
         email: email,
         password: password
     })
     axios.post("/login", userData)
          .then((res) => { 
              console.log(res.data)
              if(res.data.message === "The email is not registered") { 
                setBackendMsj("The email is not registered")
                setShowBackendMsj(true)
              } else if (res.data.message === "Password is Incorrect") { 
                setBackendMsj("Password is Incorrect")
                setShowBackendMsj(true)
              } else { 
                 setBackendMsj("Entering the account of  " + res.data.name)
                 setShowBackendMsj(true)
                 setTimeout(() => { 
                  sessionStorage.setItem("userId", res.data.id)
                  userCtx.updateUser(res.data.id)
                  userCtx.updateUserProfileImage(res.data.profileImage)
                  userCtx.updateUserName(res.data.name)
                  userCtx.updateUserEmail(res.data.email)
                  sessionStorage.setItem("userName", res.data.name)
                 }, 500) 
                 setTimeout(() => { 
                      navigate(`/main/${sessionStorage.userId}`)
                      console.log("Iniciaste sesion, el ID del contexto es " + userCtx.userId)
                 }, 1500)
              }
              
               
          })
          .catch(err => console.log(err))
   }

   useEffect(() => { 
     console.log("El ID del contexto: " +    userCtx.userId)
     console.log("El ID del SessionStorage: " +    sessionStorage.userId)
     console.log("El Nombre del contexto: " +   userCtx.userName)
     console.log("El Email del contexto: " +   userCtx.userEmail)
   }, [userCtx.userName])

   

  return (

    <>
     <PruebaDeNav/>

     <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div   className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"aria-hidden="true">
        <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{  clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%', }} />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Login with your Account</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600"> Thanks for trusting us!  </p>
      </div>
      
      
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
    

         
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input onChange={(e) => setEmail(e.target.value)}  type="email" name="email" id="email"  autoComplete="email"
                className="block w-full text-center rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  border-indigo-600 border-1 " 
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">  Password  </label>
            <div className="mt-2.5">
              <input name="password"  type="password"  id="password"  rows={4}  onChange={(e) => setPassword(e.target.value)}
                className="block w-full text-center rounded-md border-indigo-600 border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
   
        </div>
        <div className="mt-10">
          <button   className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => logIn()}> Login </button>
        </div>

        <div>
           <p className='cursor-pointer mt-4 textdecora underline'>Forgot my password</p>
        </div>

        <div>
        {/*   {showBackendMsj && <div className="toast"><div className="alert alert-success  bg-indigo-300 text-black"><span>{backendMsj}</span></div></div>} */}
        {showBackendMsj &&  <p>{backendMsj}</p>}
        </div>
      
    </div>
    
    </>
   
  )
}
