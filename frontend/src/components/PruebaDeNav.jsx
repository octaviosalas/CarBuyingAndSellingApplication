import React, { useEffect } from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import me from "../img/me.jpg"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'
import { useNavigate } from 'react-router-dom';
import axios from "axios"


const navigation = {
  categories: [
    {
      id: 'cars',
      name: 'Cars',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://gower.ar/wp-content/uploads/2023/01/Gol--300x300.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Top Cars',
          href: '#',
          imageSrc: 'https://bestdrivers.com.ar/site/wp-content/uploads/2020/07/mercedes.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'cars',
          name: 'Brands',
          items: [
            { name: 'All Cars', href: '/allCars' },
            { name: 'Volkswagen', href: '#' },
            { name: 'Ford', href: '#' },
            { name: 'Suzuki', href: '#' },
            { name: 'Fiat', href: '#' },
            { name: 'MercedesBenz', href: '#' },
            { name: 'Audi', href: '#' },
            { name: 'Hiunday', href: '#' },
          ],
        },
        {
          id: 'kilometres',
          name: 'Kilometres',
          items: [
            { name: '5,000 to 25,000', href: '/fiveToTwentyFive' },
            { name: '25,000 to 50,000', href: '/twentyFiveToFifty' },
            { name: '50,000 to 75,000', href: '/FiftyToSeventyFive' },
            { name: '75,000 to 100,000', href: '/seventyFiveToHundred' },
            { name: '100,000 to 150,000', href: "/hundredToOneFiftyHundred" },
            { name: '150,000 to 200,000', href: '/hundredToTwoHundred' },
            { name: 'More than 200,000', href: '#' },
          ],
        },
        {
          id: 'location',
          name: 'Location',
          items: [
            { name: 'BuenosAires', href: '/allCarsByLocation/BuenosAires' },
            { name: 'Cordoba', href: '/allCarsByLocation/Cordoba' },
            { name: 'Corrientes', href: '/allCarsByLocation/Corrientes' },
            { name: 'Entre Rios', href: '/allCarsByLocation/EntreRios' },
            { name: 'Formosa', href: '/allCarsByLocation/Formosa' },
            { name: 'La Pampa', href: '/allCarsByLocation/LaPampa' },
            { name: 'La Rioja', href: '/allCarsByLocation/LaRioja' },
            { name: 'Mendoza', href: '/allCarsByLocation/Mendoza' },
            { name: 'Misiones', href: '/allCarsByLocation/Misiones' },
            { name: 'Neuquen', href: '/allCarsByLocation/Neuquen' },
            { name: 'Salta', href: '/allCarsByLocation/Salta' },
            { name: 'San Luis', href: '/allCarsByLocation/SanLuis' },
            { name: 'Santa Fe', href: '/allCarsByLocation/SantaFe' },
          ],
        },
      ],
    },
    {
      id: 'vans',
      name: 'Vans',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://previews.123rf.com/images/2dmolier/2dmolier1612/2dmolier161200056/67499453-vista-trasera-de-la-camioneta-pick-up-vac%C3%ADo-en-el-fondo-blanco-ilustraci%C3%B3n-3d.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Top Vans',
          href: '#',
          imageSrc: 'https://st2.depositphotos.com/3037725/48449/i/600/depositphotos_484491590-stock-photo-tula-russia-june-25-2021.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'brand',
          name: 'Brand',
          items: [
            { name: 'All Vans', href: '/allVans' },
            { name: 'Volkswagen', href: '/allVans/Volkswagen' },
            { name: 'Ford', href: 'allVans/Ford' },
            { name: 'Suzuki', href: 'allVans/Suzuki' },
            { name: 'Fiat', href: '/allVans/Fiat' },
            { name: 'MercedesBenz', href: 'allVans/MercedesBenz' },
            { name: 'Audi', href: 'allVans/Audi' },
            { name: 'Hiunday', href: 'allVans/Hiunday' },
          
          ],
        },
        {
            id: 'kilometres',
          name: 'Kilometres',
          items: [
            { name: '5,000 to 25,000', href: '/fiveToTwentyFiveVans' },
            { name: '25,000 to 50,000', href: '/twentyFiveToFiftyVans' },
            { name: '50,000 to 75,000', href: '/fiftyToSeventyFiveVans' },
            { name: '75,000 to 100,000', href: '/seventyFiveToHundredVans' },
            { name: '100,000 to 150,000', href: '/hundredToHundredFiftyVans' },
            { name: '150,000 to 200,000', href: '/hundredToTwoHundredVans' },
            { name: 'More than 200,000', href: '/hundredToTwoHundredVans0' },
          ],
        },
        {
            id: 'location',
            name: 'Location',
            items: [
              { name: 'BuenosAires', href: '/allVansByLocation/BuenosAires' },
              { name: 'Cordoba', href: '/allVansByLocation/Cordoba' },
              { name: 'Corrientes', href: '/allVansByLocation/Corrientes' },
              { name: 'Entre Rios', href: '/allVansByLocation/EntreRios' },
              { name: 'Formosa', href: '/allVansByLocation/Formosa' },
              { name: 'La Pampa', href: '/allVansByLocation/LaPampa' },
              { name: 'La Rioja', href: '/allVansByLocation/LaRioja' },
              { name: 'Mendoza', href: '/allVansByLocation/Mendoza' },
              { name: 'Misiones', href: '/allVansByLocation/Misiones' },
              { name: 'Neuquen', href: '/allVansByLocation/Neuquen' },
              { name: 'Salta', href: '/allVansByLocation/Salta' },
              { name: 'San Luis', href: '/allVansByLocation/SanLuis' },
              { name: 'Santa Fe', href: '/allVansByLocation/SantaFe' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




const PruebaDeNav = () => {


    const [open, setOpen] = useState(false)
    const [text, setText] = useState("Before you meet with someone, you can look at their reputation as a seller.")
    const [showInput, setShowInput] = useState(false)
    const [searchParam, setSearchParam] = useState("")
    const [logOutOrRegister, setLogOutOrRegister] = useState(true)
   

    const userCtx = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => { 
          
        setTimeout(() => { 
             setText("Thanks for trusting us")
        }, 10000 )

        setTimeout(() => { 
            setText("Before you meet with someone, you can look at their reputation as a seller.")
       }, 20000 )

    }, [])

    useEffect(() => { 
      if(userCtx.userId !== null) { 
        setLogOutOrRegister(false)
      } else { 
        setLogOutOrRegister(true)
      }
    }, [userCtx.userId])



    const handleItemAboutUs = (text) => {
      if (text === 'About Us') {
        navigate("/aboutUs")
      }
    };

    const handleEnterPress = (event) => {
      if (event.key === 'Enter') {
        setTimeout(() => { 
          navigate(`/seeker/${searchParam}`)
        }, 200)
      }
    };

    const handleChange = (event) => {
      setSearchParam(event.target.value);
    };

    useEffect(() => { 
      console.log(searchParam)
    }, [searchParam])

   


    const saveFiltersInSessionStorage = (text) => { 
      if(text === "Volkswagen" || text === "Ford" || text === "Suzuki" || text === "Fiat" || text === "MercedesBenz" || text === "Audi" || text === "Hiunday") { 
        sessionStorage.setItem("brand", text)
        console.log("La marca guardada en el sessionStorage es " + text)
        console.log(sessionStorage.brand)
        setTimeout(() => { 
        navigate(`/allCars/${sessionStorage.brand}`)
        window.location.reload();
        }, 400)

       if(text === "BuenosAires" || text === "Cordoba" || text === "Corrientes" || text === "Entre Rios" || text === "Formosa" || text === "La Pampa" || text === "La Rioja" || text === "Mendoza" || text === "Misiones" || text === "Neuquen" || text === "Salta" || text === "San Luis" || text === "Santa Fe") { 
        sessionStorage.setItem("location", text)
        console.log("La ubicacion en el sessionStorage es " + text)
        console.log(sessionStorage.location)
        setTimeout(() => { 
          navigate(`/allCarsByLocation/${sessionStorage.location}`)
          window.location.reload();
        }, 400)
      }
    }}

    const logOut = () => { 
      navigate("/login")
      sessionStorage.clear()
      userCtx.updateUser(null)
      userCtx.updateUserProfileImage(null)
      
      setTimeout(() => {  
           console.log("Cerraste la sesion, ahora el contexto tiene un ID de" +  userCtx.userId)
           console.log("Cerraste la sesion, ahora el SessionStorage tiene un ID de" +  sessionStorage.userId)
      }, 1000)
    }

    const wantToRegister = () => { 
      navigate("/register")
    }


  return (
    <div>
        <div className=" bg-indigo-500 2xl:w-[100%]  fixed top-0 left-0 right-0 main-content z-50 2xl:ml-[0px] xl:ml-[0px] lg:ml-[30px] md:ml-[30px]  sm:ml-[38px]  xxs:ml-[40px] xxxs:ml-[35px]" >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment} >
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
            <Transition.Child  as={Fragment}  enter="transition-opacity ease-linear duration-300"  enterFrom="opacity-0" enterTo="opacity-100"  leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100"
                leaveTo="opacity-0"  >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex md:ml-[10vh] md:mt-[14vh] sm:ml-[10vh] sm:mt-[14vh] xxs:ml-[8.5vh] xxs:mt-[14vh] xxxs:ml-[8vh] xxxs:mt-[14vh]">
             <Transition.Child as={Fragment}  enter="transition ease-in-out duration-300 transform"  enterFrom="-translate-x-full"  enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="-translate-x-full"  >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button   type="button" className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"  onClick={() => setOpen(false)}  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>

                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>

                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900" >
                              {section.name} 
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2 text-gray-500" >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>

                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900" >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

               
                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">ARG</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>



      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
         {text}
        </p>

        <nav aria-label="Top" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

             
            

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                          
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 2xl:w-full 2xl:ml-[0px] xl:w-full xl:ml-[8vh] lg:ml-[6vh] ">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="hover:text-gray-800"  onClick={() => saveFiltersInSessionStorage(item.name)}> {/* item menu */}
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a  key={page.name}  href={page.href} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800" onClick={() => handleItemAboutUs(page.name)} >
                     {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">ARG</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                   {showInput ? 
                   <input type="text" className='bg-white text-black rounded-lg' onKeyDown={handleEnterPress} onChange={handleChange}></input>
                    : 
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" onClick={() => setShowInput(true)}/>}   
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">

                   {/*AVATAR CON MENU DESPLEGABLE */}
               <div className="navbar-end bg-white text-indigo-600">
                  <div className="dropdown dropdown-end bg-white text-indigo-600">
                     <label tabIndex={0} className="btn btn-ghost btn-circle avatar xxxs:mr-[50px]">
                        <div className="w-10 rounded-full ">
                            <img src={userCtx.userProfileImage} />
                        </div>
                     </label>
                       <ul tabIndex={0} className=" bg-white mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52 xxxs:mr-[50px]">
                       <Link to={`/profile/${userCtx.userId}`}><li><a className="justify-between"> Profile <span className="badge">New</span></a></li></Link>
                       <li><a>Settings</a></li>
                       <Link to={`/main/${userCtx.userId}`}><li><p>Main</p></li></Link> 
                       {logOutOrRegister ? <li><a onClick={() => wantToRegister()}>Create Account</a></li>   : <li><a onClick={() => logOut()}>Logout</a></li>}
                       </ul> 
                  </div>
               </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
    </div>
  )
}

export default PruebaDeNav;
