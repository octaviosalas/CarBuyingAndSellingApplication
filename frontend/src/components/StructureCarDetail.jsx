import React, {useEffect} from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
//https://tailwindui.com/components/ecommerce/components/category-filters
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'
import wsp from "../img/www.png"
import axios from "axios"

const sortOptions = [
  { name: 'Contact Seller', href: '#', current: true },
  { name: <p className=" text-[14px] cursor-pointer" onClick={()=>window.my_modal_3.showModal()}>Make an Ofert</p>, current: false },
  { name: 'Sellers reputation', href: '#', current: false },
  { name: 'Report Seller', href: '#', current: false }
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: {}, label: 'a Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const StructureCarDetail = ({car}) => {

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const [amount, setAmount] = useState("")


  const userCtx = useContext(UserContext)

  function handleCarouselClick(event) {
  event.preventDefault();
  
}

const contactWhatsApp = () => {
  const phoneNumber = encodeURIComponent(car.phone);

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.open(`whatsapp://send?phone=${phoneNumber}`, '_blank');
  } else {
    window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
  }
};

const openModal = () => { 
   window.my_modal_3.showModal();
}

  

const sendOfertToSeller = () => { 
  const myOfert = ( { 
    amount: amount,
    sellerId: car.sellerId,
    interestedId: userCtx.userId
  })
  axios.post("http://localhost:4000/sendOfert", myOfert)
       .then(res => console.log(res.data))
       .catch(err => console.log(err))
}
  

  return (
<div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment} className="mt-[5vh]">
          <Dialog as="div" className="relative z-40 lg:hidden " onClose={setMobileFiltersOpen}>
            <Transition.Child  as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100" leaveTo="opacity-0" >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex mt-[12vh]">
              <Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="translate-x-full" enterTo="translate-x-0"  leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="translate-x-full" >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900"><b>{car.name} - <b className='text-[15px]'>{car.location}</b></b></h2>

                    <button type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400" onClick={() => setMobileFiltersOpen(false)} >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                    <div className='mt-[4vh]'>
                    <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                     <span>Year</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-white`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> The car is from the year: {car.year} </Disclosure.Panel> </>  )}
               </Disclosure>

                 <Disclosure as="div" className="mt-2">
                   {({ open }) => (
                     <>
                       <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                          <span>Characteristics</span>
                          <ChevronUpIcon className={`${   open ? 'rotate-180 transform' : '' } h-5 w-5 text-white`} />
                           </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                - {car.characteristics[0]} 
                                  <br/>
                                - {car.characteristics[1]} 
                                  <br/>
                                - {car.characteristics[2]} 
                                 </Disclosure.Panel>
                     </> )}
                </Disclosure>

                <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                     <span>Engine</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-white`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">The Engine is:  {car.engine} </Disclosure.Panel> </>  )}
               </Disclosure>

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                     <span>Kilometres</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-white`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> The car has {car.kilometres} Kilometres </Disclosure.Panel> </>  )}
               </Disclosure>

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                     <span>Seller location</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-white`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> {car.location}, Argentina </Disclosure.Panel> </>  )}
               </Disclosure>

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                     <span>Price</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-white`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> {car.price} USD</Disclosure.Panel> </>  )}
               </Disclosure>
                    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl lg:ml-[40px] lg:text-[30px] xl:ml-[30px] xl:text-[35px] md:text-[30px] sm:text-[30px] sm:ml-[15px] xxs:ml-[30px] xxs:text-[15px] xxxs:text-[10px] xxxs:ml-[15px] font-bold tracking-tight text-gray-900">{car.name}</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Options
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

              

                <Transition  as={Fragment}  enter="transition ease-out duration-100"  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"  leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95" >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a href={option.href} className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm' )} >
                              {option.name}
                           
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button  type="button" className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden" onClick={() => setMobileFiltersOpen(true)} >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only"> Products </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>

                <div className='mb-1'>
                  <b>Seller</b>: {car.seller}
                  <img src={wsp} className='w-[130px] h-[45px] 2xl:ml-[50px] xl:ml-[50px] lg:ml-[50px] md:ml-[50px] cursor-pointer' onClick={() => contactWhatsApp()}></img>
               </div>
               
            <div className="w-full px-4 pt-16">
              <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
  

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-indigo-500 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                     <span>Year</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-indigo-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> The car is from the year: {car.year} </Disclosure.Panel> </>  )}
               </Disclosure>
                 <Disclosure as="div" className="mt-2">
                   {({ open }) => (
                     <>
                       <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-indigo-500 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                          <span>Characteristics</span>
                          <ChevronUpIcon className={`${   open ? 'rotate-180 transform' : '' } h-5 w-5 text-indigo-500`} />
                           </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                - {car.characteristics[0]} 
                                  <br/>
                                - {car.characteristics[1]} 
                                  <br/>
                                - {car.characteristics[2]} 
                                 </Disclosure.Panel>
                     </> )}
                </Disclosure>

                <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-indigo-500 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                     <span>Description</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-indigo-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> {car.description} </Disclosure.Panel> </>  )}
               </Disclosure>
               

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-indigo-500 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                     <span>Kilometres</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-indigo-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> The car has {car.kilometres} Kilometres </Disclosure.Panel> </>  )}
               </Disclosure>

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-indigo-500 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                     <span>Seller location</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-indigo-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> {car.location}, Argentina </Disclosure.Panel> </>  )}
               </Disclosure>

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-indigo-500 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                     <span>Price</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-indigo-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> {car.price} USD</Disclosure.Panel> </>  )}
               </Disclosure>
                
                <div>
                            <dialog id="my_modal_3" className="modal">
                                 <form method="dialog" className="modal-box">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                     <h3 className="text-[12px] text-gray-400">Please, try to match the price asked by the seller.</h3>
                                     <h4 className='mt-[6px]'><b>{car.name}</b></h4>
                                     <hr />
                                     <div className='mt-[20px]'>
                                        <p>The seller {car.seller} will recive your ofert</p>
                                        <br/>
                                        <p>Remember, he is askin <b>{car.price} USD</b> for the vehicle </p>
                                        <p className='text-[12px] text-gray-400'>(Offers with values that are far from the intended value will be rejected)</p>
                                     </div>
                                     
                                     <div className="mt-[20px]">
                                        <input type='number' placeholder='Ofert in USD' onChange={(e) => setAmount(e.target.value)}/>
                                        <br/>
                                        <button className='btn btn-primary w-[120px] h-[30px] mt-[20px]' onClick={() => sendOfertToSeller()}>Send Ofert</button>
                                     </div>
                                </form>
                            </dialog>
                </div>
    
              
            </div>
        </div>
               
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="carousel w-[60vh] 2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] sm:ml-[100px] xxs:ml-[70px] xxxs:ml-[30px]">
                   <div id="item1" className="carousel-item w-full">
                     <img src={car.img[0]} className="w-[50vh] h-[50vh] md:w-[55vh] md:h-[35vh]  sm:w-[50vh] sm:h-[30vh] xxs:w-[46vh] xxs:h-[26vh] xxxs:w-[42vh] xxxs:h-[22vh]" />
                  </div> 
                  <div id="item2" className="carousel-item w-full">
                    <img src={car.img[1]} className="w-[50vh] h-[50vh] md:w-[55vh] md:h-[35vh]  sm:w-[50vh] sm:h-[30vh] xxs:w-[46vh] xxs:h-[26vh] xxxs:w-[42vh] xxxs:h-[22vh]" />
                 </div> 
                 <div id="item3" className="carousel-item w-full">
                    <img src={car.img[2]} className="w-[50vh] h-[50vh] md:w-[55vh] md:h-[35vh]  sm:w-[50vh] sm:h-[30vh] xxs:w-[46vh] xxs:h-[26vh] xxxs:w-[42vh] xxxs:h-[22vh]" />
                 </div> 
                 <div id="item4" className="carousel-item w-full">
                    <img src={car.img[3]} className="w-[50vh] h-[50vh] md:w-[55vh] md:h-[35vh]  sm:w-[50vh] sm:h-[30vh] xxs:w-[46vh] xxs:h-[26vh] xxxs:w-[42vh] xxxs:h-[22vh]" />
                  </div>
            </div> 
<div className="flex justify-center w-[60vh] py-1 gap-1">
  <a href="#item1" className="btn btn-xs" >1</a> 
  <a href="#item2" className="btn btn-xs" >2</a> 
  <a href="#item3" className="btn btn-xs" >3</a> 
  <a href="#item4" className="btn btn-xs" >4</a>
</div>
                </div>
            </div>
          </section>
        </main>
      </div>

     
    </div>
    
  )
}

export default StructureCarDetail

