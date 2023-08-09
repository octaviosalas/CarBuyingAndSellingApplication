import React from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import PruebaDeNav from './PruebaDeNav'
import Sidebar from './Sidebar'
import Footer from './Main/Footer'
import FooterTwo from './Main/FooterTwo'
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'

const Profile = () => {

    const userCtx = useContext(UserContext)
    const [showInputs, setShowInputs] = useState(true)


  return (
    <div>
        <PruebaDeNav/>
        <Sidebar/>
      {showInputs ?
       <> 
                <div className="px-4 sm:px-0 mt-[20px]">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Your Information</h3>
                <p className='text-slate-400 text-[14px]'>The information you are seeing is the information with which you registered. If you want to modify it, click here: <b className='text-black cursor-pointer underline'>Edit my Data</b></p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 flex">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userCtx.userName}</dd>
                </div>
                <hr className='text-black'/>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900"> Email</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Password</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Profile Image</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <div className="avatar"> 
                        <div className="w-20 rounded-full mb-4"> <img src={userCtx.userProfileImage} /></div>
                    </div>
                    </dd>
                </div>
                </dl>
            </div> 
       </>  : 
        
       <>
        <div className="px-4 sm:px-0 mt-[20px]">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Your Information</h3>
                <p className='text-slate-400 text-[14px]'>The information you are seeing is the information with which you registered. If you want to modify it, click here: <b className='text-black cursor-pointer underline'>Edit my Data</b></p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 flex">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userCtx.userName}</dd>
                </div>
                <hr className='text-black'/>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900"> Email</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Password</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Profile Image</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <div className="avatar"> 
                        <div className="w-20 rounded-full mb-4"> <img src={userCtx.userProfileImage} /></div>
                    </div>
                    </dd>
                </div>
                </dl>
            </div> 
       </>
       }

      <div>
         <button className='text-indigo-600 bg-white'> Save Changes</button>
      </div>
      <div className='mt-[70px]'>
            <Footer/>
            <FooterTwo/>
      </div>
   
    </div>
  )
}

export default Profile
