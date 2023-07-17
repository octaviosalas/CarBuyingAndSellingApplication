import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
//https://tailwindui.com/components/ecommerce/components/category-filters
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'

const sortOptions = [
  { name: 'Contact Seller', href: '#', current: true },
  { name: 'Make an Ofer', href: '#', current: false },
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
  const userCtx = useContext(UserContext)



  

  return (
<div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment} className="mt-[5vh]">
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child  as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100" leaveTo="opacity-0" >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="translate-x-full" enterTo="translate-x-0"  leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="translate-x-full" >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Car Information</h2>

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
                     <span>Engine</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-indigo-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">The Engine is:  {car.engine} </Disclosure.Panel> </>  )}
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
            </div>
        </div>
               
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="carousel w-[60vh]">
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
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
                </div>
            </div>
          </section>
        </main>
      </div>

      <div>
       <Link to={"/allCars"}> <p>Go Main</p> </Link> 
      </div>
    </div>
    
  )
}

export default StructureCarDetail


/*

import React from 'react'
import { Link } from 'react-router-dom'

const StructureCarDetail = ({car}) => {
  return (

    <>
          <div className="card lg:card-side bg-base-100 shadow-xl">
                              
<div className="carousel w-full mr-2">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={car.img[0]} className="w-full h-69" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle text-black"></a> 
      <a href="#slide2" className="btn btn-circle"></a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={car.img[1]} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle"></a> 
      <a href="#slide3" className="btn btn-circle"></a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={car.img[2]} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle"></a> 
      <a href="#slide4" className="btn btn-circle"></a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={car.img[3]} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle"></a> 
      <a href="#slide1" className="btn btn-circle"></a>
    </div>
  </div>
</div>
                       <div  className="card-body ml-4 text-cemter">
                          
                       
                
                          <div  className='ml-25 mt-10'>
                               <h2 className="card-title w-5 ml-10  whitespace-nowrap">{car.name}</h2>
                               <br />
                               <hr />
                                <p> <b>Brand: </b> {car.brand}.</p>
                                <p><b>Car Year: </b> {car.year}.</p>
                                <p><b>Kilometres: </b> {car.kilometres}.</p>
                                <p><b>Price: </b> {car.price} USD</p>
                          </div>
                            
                           <div className="card-actions mt-10 justify-end flex">
                              <button className="btn btn-primary ">Send message to Seller</button>
                           </div>
                        </div>
           </div>

                <div>
                   <div tabIndex={0} className="collapse border border-base-300 bg-base-200"> 
                      <div className="collapse-title text-xl font-medium"> Sellers Location</div>
                         <div className="collapse-content"> 
                            <p>{car.location}</p>
                         </div>
                   </div>
                   <div tabIndex={0} className="collapse border border-base-300 bg-base-200"> 
                      <div className="collapse-title text-xl font-medium"> View Seller Description</div>
                         <div className="collapse-content"> 
                            <p>It is a long established fact that a reader will be distracted by the text content of a site while looking at its design. The point of using Lorem Ipsum is that it has a more or less normal distribution of the letters, as opposed to using texts such as "Content here, content here". These texts make it sound like readable Spanish. Many desktop publishing packages and web page editors use Lorem Ipsum as their default text, and a search for "Lorem Ipsum" will return many websites that use this text if they are in a development state. Many versions have evolved over the years, sometimes by accident, other times on purpose for example, inserting humor and the like</p>
                         </div>
                   </div>
                </div>
  

     <div>
           <Link to={"/main"}> <p>Back main</p></Link>  
    </div> 
    </>
  )
}

export default StructureCarDetail
*/