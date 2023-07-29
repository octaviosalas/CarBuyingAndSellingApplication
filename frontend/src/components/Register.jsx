import React, { useEffect } from 'react'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Dropzone from 'react-dropzone';
import PruebaDeNav from './PruebaDeNav'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Register() {


  
  const [name, setName] = useState("")
  const [telephone, setTelephone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [profileImage, setProfileImage] = useState("")
  const [loading, setLoading] = useState(false)
  const [backendMsj, setBackendMsj] = useState("")
  const [showBackendMsj, setShowBackendMsj] = useState(false)

  const navigate = useNavigate()

  const registerAccount = () => { 
    const newUser = ({ 
      name: name,
      telephone: telephone,
      email: email,
      password: password,
      profileImage: profileImage
    })
    axios.post("/register", newUser)
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

  const handleDropImage = (files) => {
    const uploaders = files.map((file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tags', `codeinfuse, medium, gist`);
      formData.append('upload_preset',  'App-Cars');
      formData.append('api_key', '687985773113572');
      formData.append('timestamp', Date.now() / 1000 / 0);
      setLoading(true);
     
      return axios
        .post('https://api.cloudinary.com/v1_1/dgheotuij/image/upload', formData, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        })
        .then((res) => {
          const data = res.data;
          const fileURL = data.secure_url;
          console.log(fileURL)
          setProfileImage(fileURL)
          setLoading(false)
        });
    });

  };

  useEffect(() => { 
     console.log(profileImage)
  }, [profileImage])
 


  return (
    <>
    <PruebaDeNav/>
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 w-[600px]">
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
                className="block w-full rounded-md text-center  border-indigo-600 border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setName(e.target.value)} />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900"> Email </label>
            <div className="mt-2.5">
              <input  type="email" name="email" id="email"  autoComplete="email"
                className="block w-full rounded-md text-center  border-indigo-600 border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900"> Phone number </label>
            <div className="relative mt-2.5">
            
              <input type="tel" name="phone-number"  id="phone-number" autoComplete="tel" className="block w-full rounded-md text-center  border-indigo-600 border-1 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setTelephone(e.target.value)}/>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">  Password  </label>
            <div className="mt-2.5">
              <input  name="password" type="password"  id="password" rows={4} className="block w-full rounded-md text-center  border-indigo-600 border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={''} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>


          {
          
        <Dropzone onDrop={handleDropImage}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] 2xl:ml-[65px] xl:ml-[65px] lg:ml-[65px] md:ml-[50px] sm:ml-[50px] xxs:w-[340px] xxxs:w-[310px] xxs:ml-[110px] xxxs:ml-[140px]"  style={{ backgroundImage: `url(${profileImage})` }}>
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md text-center bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
                </div>

          </div>
        )}
      </Dropzone>
        
  }

         
   
        </div>
        <div className="mt-10">
          <button  className="block w-full rounded-md text-center bg-indigo-600 px-3.5 py-2.5  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => registerAccount()}> Register </button>
        </div>

        <div>
          <Link to={"/login"}><p className='cursor-pointer mt-4 textdecora underline'>I have an Acount</p></Link> 
        </div>

        <div>
            {showBackendMsj && <div className="toast"><div className="alert alert-success  bg-indigo-300 text-black"><span>{backendMsj}</span></div></div>}
        </div>
     
    </div>  
    </>
   
  )
}