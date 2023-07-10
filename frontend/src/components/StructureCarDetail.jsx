import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

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

  return (
<div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
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
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Year</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> The car is from the year: {car.year} </Disclosure.Panel> </>  )}
               </Disclosure>

                 <Disclosure as="div" className="mt-2">
                   {({ open }) => (
                     <>
                       <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                          <span>Characteristics</span>
                          <ChevronUpIcon className={`${   open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
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
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Engine</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">The Engine is:  {car.engine} </Disclosure.Panel> </>  )}
               </Disclosure>

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Kilometres</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> The car has {car.kilometres} Kilometres </Disclosure.Panel> </>  )}
               </Disclosure>

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Seller location</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> {car.location} </Disclosure.Panel> </>  )}
               </Disclosure>

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Price</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{car.name}</h1>

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
                
            <div className="w-full px-4 pt-16">
              <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Year</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> The car is from the year: {car.year} </Disclosure.Panel> </>  )}
               </Disclosure>

                 <Disclosure as="div" className="mt-2">
                   {({ open }) => (
                     <>
                       <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                          <span>Characteristics</span>
                          <ChevronUpIcon className={`${   open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
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
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Engine</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">The Engine is:  {car.engine} </Disclosure.Panel> </>  )}
               </Disclosure>

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Kilometres</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> The car has {car.kilometres} Kilometres </Disclosure.Panel> </>  )}
               </Disclosure>

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Seller location</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> {car.location} </Disclosure.Panel> </>  )}
               </Disclosure>

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Price</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> {car.price} USD</Disclosure.Panel> </>  )}
               </Disclosure>
            </div>
        </div>
               
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <img src={car.img}></img>
                </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    
  )
}

export default StructureCarDetail


/*
import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

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

  return (
<div className="bg-white">
      <div>
      
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
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
                         <p><b>Car Model: </b> {car.name}</p>
                         <p><b>Kilometres:</b> {car.kilometres} Kms</p>
                         <p><b>Seller Location: </b> {car.location}, Argentina</p>
                         <p>
                          <b>Characteristics:</b>
                          <br />
                           {car.characteristics[0]}
                           <br/>
                           {car.characteristics[1]}
                           <br/>
                           {car.characteristics[2]}
                         </p>
                         <p><b>Type Engine: </b> {car.engine}</p>
                         <p><b>Price in USD: </b> {car.price} USD</p>
                    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{car.name}</h1>

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
           
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                
            <div className="w-full px-4 pt-16">
              <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Year</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> The car is from the year: {car.year} </Disclosure.Panel> </>  )}
               </Disclosure>

                 <Disclosure as="div" className="mt-2">
                   {({ open }) => (
                     <>
                       <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                          <span>Characteristics</span>
                          <ChevronUpIcon className={`${   open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
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
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Engine</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">The Engine is:  {car.engine} </Disclosure.Panel> </>  )}
               </Disclosure>

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Kilometres</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> The car has {car.kilometres} Kilometres </Disclosure.Panel> </>  )}
               </Disclosure>

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Seller location</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> {car.location} </Disclosure.Panel> </>  )}
               </Disclosure>

               <Disclosure>
                 {({ open }) => (
                  <>
                   <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <span>Price</span>
                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`} />
                     </Disclosure.Button>
                       <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"> {car.price} USD</Disclosure.Panel> </>  )}
               </Disclosure>
            </div>
        </div>
               
              </form>

       
              <div className="lg:col-span-3">
                <img src={car.img}></img>
                </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    
  )
}

export default StructureCarDetail

*/