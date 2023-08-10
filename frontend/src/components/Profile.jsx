import React from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import PruebaDeNav from './PruebaDeNav'
import Sidebar from './Sidebar'
import Footer from './Main/Footer'
import FooterTwo from './Main/FooterTwo'
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Dropzone from 'react-dropzone';



const Profile = () => {

    const userCtx = useContext(UserContext)
    const navigate = useNavigate()
    const [showInputs, setShowInputs] = useState(true)
    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [lastPassword, setLastPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newImage, setNewImage] = useState("")
    const [showNewImage, setShowNewImage] = useState(true)
    const [backendMsg, setBackendMsg] = useState("")

    const saveMyChanges = () => { 
        const newUserData = ( { 
           name: newName,
           email: newEmail,
           lastPassword: lastPassword,
           newPassword: newPassword,
           newImage: newImage
        })
        axios.put(`http://localhost:4000/changeUserData/${userCtx.userId}`, newUserData)
             .then((res) => { 
                console.log(res.data)
                if(res.data.message === "The password you entered is not your current password. Please re-enter it to verify your identity.") { 
                    setBackendMsg(res.data.message)
                } else if (res.data.message === "The email entered is not registered. Please re-enter it correctly in order to make the changes.") { 
                    setBackendMsg(res.data.message)
                } else if(res.data.message === "Your data was changed correctly. Please log in again with the new data.") { 
                    setBackendMsg(res.data.message)
                    setTimeout(() => { 
                       navigate("/login")
                    }, 1800)
                }
             })
             .catch((err) => { 
                console.log(err)
             })
    }

     const goBack = () => { 
        navigate(`/main/${userCtx.userId}`)
     } 

     const handleDropImage = (files) => {
        const uploaders = files.map((file) => {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('tags', `codeinfuse, medium, gist`);
          formData.append('upload_preset', 'App-Cars');
          formData.append('api_key', '687985773113572');
          formData.append('timestamp', Date.now() / 1000 / 0);
      
         
          return axios
            .post('https://api.cloudinary.com/v1_1/dgheotuij/image/upload', formData, {
              headers: { 'X-Requested-With': 'XMLHttpRequest' },
            })
            .then((res) => {
                const data = res.data
                console.log(data.secure_url);
                setNewImage(data.secure_url)
                setTimeout(() => { 
                 setShowNewImage(false)
                }, 300)
            });
        });
    
        axios.all(uploaders).then(() => {
          // Aquí puedes realizar alguna acción después de cargar todas las imágenes
        });
      };


  return (
    <div>
        <PruebaDeNav/>
        <Sidebar/>
      {showInputs ?
       <> 
                <div className="px-4 sm:px-0 mt-[80px]">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Your Information</h3>
                <p className='text-slate-400 mt-6 text-[14px]'>The information you are seeing is the information with which you registered. If you want to modify it, click in "Edit my Data": </p>
                 <div className='mt-6'> 
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                             <img src={userCtx.userProfileImage}/>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                    <dt className="text-sm font-medium leading-6 text-gray-900"> Name</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userCtx.userName}</dd>
                </div>
                <hr className='text-black'/>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900"> Email</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userCtx.userEmail}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Password</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                </div>
               dfdsfd
                </dl>
            </div> 
            <div>
                <button className='text-indigo-600 bg-white'><b className='text-indigo-600 bg-white mt-2 m-2  cursor-pointer  text-[16px]' onClick={() => setShowInputs(false)}>Edit my Data</b></button>
                <button className='text-indigo-600 mt-2 m-2 bg-white' onClick={() => goBack()}><b>Continue with current data</b> </button>
                <div className='mt-6'>
                    <p className='text-indigo-500 text-[15px]'>{backendMsg}</p>
                </div>
           </div>
       </>  : 
        
       <>
        <div className="px-4 sm:px-0 mt-[80px]">
                <h3 className="text-base font-semibold leading-7 text-gray-900">You are about to edit your information</h3>
                <p><b className='text-black cursor-pointer underline' onClick={() => setShowInputs(true)}>Cancel</b></p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div>
                    <span className="text-slate-400 cursor-pointer underline text-[14px]">Click here to Change your Image</span>
                    <Dropzone onDrop={handleDropImage}>
                            {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps({ className: 'dropzone' })}>
                                <input {...getInputProps()} />
                                <div className='flex ml-[400px]'>
                                    <div class="mt-2 flex justify-center rounded-lg bpx-6 py-10 w-[400px]"  >
                                        <div className="avatar">
                                                <div className="w-24 rounded-full ">
                                                 {showNewImage ? <img src={userCtx.userProfileImage}/> : <img src={newImage}/>}
                                                </div>
                                            </div>
                                    </div>
                            </div>
                            
                            </div>
                            )}
                    </Dropzone>
                    </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                    <dt className="text-sm font-medium leading-6 text-gray-900"> Name</dt>
                    <input type='text' placeholder='New Name..' className='rounded-xl text-[14px] h-[25px]' onChange={(e) => setNewName(e.target.value)}/>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900"> Email</dt>
                    <input type='text' placeholder='New Email..' className='rounded-xl text-[14px] h-[25px]' onChange={(e) => setNewEmail(e.target.value)}/>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Last Password</dt>
                    <input type='text' placeholder='Last Password..' className='rounded-xl text-[14px] h-[25px]' onChange={(e) => setLastPassword(e.target.value)}/>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">New Password</dt>
                    <input type='text' placeholder='New Password..' className='rounded-xl text-[14px] h-[25px]' onChange={(e) => setNewPassword(e.target.value)}/>
                </div>
                </dl>
            </div> 
            <div >
                <button className='text-indigo-600 bg-white' onClick={() => saveMyChanges()}> Save Changes</button>
                <div className='mt-6'>
                    <p className='text-indigo-500 text-[15px]'>{backendMsg}</p>
                </div>
           </div>
       </>
       }

      
      <div className='mt-[70px]'>
            <Footer/>
            <FooterTwo/>
      </div>
   
    </div>
  )
}

export default Profile
