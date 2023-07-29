import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import Sidebar from "./Sidebar"
import { useEffect } from 'react';
import PruebaDeNav from "../components/PruebaDeNav"
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const ClouddinarPrueba = () => {
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sellerName, setSellerName] = useState("")
  const [carName, setCarName] = useState("")
  const [type, setType] = useState("")
  const [description, setDescription] = useState("")
  const [kilometres, setKilometres] = useState("")
  const [year, setYear] = useState("")
  const [price, setPrice] = useState("")
  const [location, setLocation] = useState("")
  const [brand, setBrand] = useState("")
  const [phone, setPhone] = useState("")
  const [datePublication, setDatePublication] = useState("")
  const [logUser, setLogUser] = useState(false)
   
   


  const userCtx = useContext(UserContext)
  console.log(userCtx.userId)

  useEffect(() => {
    console.log(imagenes);
  }, [imagenes]);

  function openModal() {
    window.my_modal_1.showModal();
  }

  useEffect(() => {
    if(userCtx.userId === null) { 
      setLogUser(true)
      setTimeout(() => { 
          openModal()
      }, 300)
    }
 }, [])



  const handleDropImage = (files) => {
    const uploaders = files.map((file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tags', `codeinfuse, medium, gist`);
      formData.append('upload_preset', 'App-Cars');
      formData.append('api_key', '687985773113572');
      formData.append('timestamp', Date.now() / 1000 / 0);
      setLoading(true);
     
      return axios
        .post('https://api.cloudinary.com/v1_1/dgheotuij/image/upload', formData, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        })
        .then((res) => {
          const data = res.data;
          console.log(data);
          const fileURL = data.secure_url;
          console.log(fileURL);
          const imagenesActuales = [...imagenes];
          imagenesActuales.push(fileURL);
          setImagenes(imagenesActuales)
          setLoading(false);
     
       
        });
    });

    axios.all(uploaders).then(() => {
      // Aquí puedes realizar alguna acción después de cargar todas las imágenes
    });
  };
 
  useEffect(() => { 
    console.log(datePublication)
  }, [datePublication])




  const postMyCar = () => { 
      const newCar = ({ 
          id: uuidv4(),
          sellerId: userCtx.userId,
          seller: sellerName,
          carName: carName,
          description: description,
          kilometres: kilometres,
          year: year,
          brand: brand,
          img: imagenes,
          price: price,
          phone: phone,
          location: location,
          type: type,
          publicationDate: datePublication
      })
      axios.post("/newCar", newCar)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
  }

  return (
    <div>
      <PruebaDeNav/>
      <Sidebar/>

      {logUser ? <div>
                  <dialog id="my_modal_1" className="modal">
                  <form method="dialog" className="modal-box">
                     <h3 className="font-bold text-lg">You are not Registered!</h3>
                     <p className="py-4">You must have an account to have Favorites</p>
                     <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to={"/"}><button className="btn">Create my Account</button></Link>                
                     </div>
                  </form>
                  </dialog>
        </div> : null}


<form>
  <div class="space-y-12 mt-[90px]">
    <div class="border-b border-gray-900/10 pb-12">
    <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">Post My Car</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">The information of your car will be seen by all our users.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        

         <div class="sm:col-span-4 2xl:ml-[250px] xl:ml-[260px] lg:ml-[250px] md:ml-[250px] sm:ml-[200px] xxs:ml-[50px]   xxxs:ml-[50px]">
             <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Your Name</label>
              <div class="mt-2">
               <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input type="text" name="username" id="username" autocomplete="username" class="  border-indigo-600 border-0.5   rounded-lg block flex-1   py-1.5 pl-1 text-gray-900 placeholder:text-gray-800 focus:ring-0 sm:text-sm sm:leading-6" 
                 onChange={(e) => setSellerName(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div class="sm:col-span-4 2xl:ml-[250px] xl:ml-[260px] lg:ml-[250px] md:ml-[250px] sm:ml-[200px] xxs:ml-[50px]  xxxs:ml-[50px]">
             <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Model</label>
              <div class="mt-2">
               <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-indigo-600 border-0.5 rounded-lg bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 xxs:w-[100px]" placeholder="janesmith"
                 onChange={(e) => setCarName(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div class="sm:col-span-4 2xl:ml-[250px] xl:ml-[260px] lg:ml-[250px] md:ml-[250px] sm:ml-[200px] xxs:ml-[50px]  xxxs:ml-[50px]">
             <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Type</label>
              <div class="mt-2">
               <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
               <select id="country" name="country" autocomplete="country-name" class="block w-full  border-indigo-600 border-0.5 rounded-lg  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" 
             onChange={(e) => setType(e.target.value)}
            >
              <option></option>
              <option>car</option>
              <option>Van</option>
             
            </select>
            </div>
          </div>
        </div>

        <div class="sm:col-span-4 2xl:ml-[250px] xl:ml-[260px] lg:ml-[250px] md:ml-[250px] sm:ml-[200px] xxs:ml-[50px]  xxxs:ml-[50px]">
             <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Publication Date</label>
              <div class="mt-2">
               <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input type="date" name="username" id="username" autocomplete="username" class="block flex-1 border-indigo-600 border-0.5 rounded-lg  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith"
                 onChange={(e) => setDatePublication(e.target.value)}
              />
            </div>
          </div>
        </div>
     

   
         


        

   

        

        

        <div class="col-span-full 2xl:ml-[1px] xl:ml-[10px] sm:ml-[50px] xxs:ml-[20px] xxxs:ml-[25px]">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Description of your vehicle</label>
          <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
          <div class="mt-2">
            <textarea id="about" name="about" rows="3" class="block w-full  border-indigo-600 border-0.5 rounded-lg  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 xxs:ml-[20px]" 
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
         
        </div>

        

        <div class="col-span-full md:ml-[70px] sm:ml-[70px] xxs:ml-[40px] xxxs:ml-[20px]">
        <Dropzone onDrop={handleDropImage}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <div className='flex'>
                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 w-[400px]"  style={{ backgroundImage: `url(${imagenes[0]})` }}>
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
                </div>

             <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 w-[400px]"  style={{ backgroundImage: `url(${imagenes[1]})` }}>
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
             </div>
          </div>
          </div>
        )}
      </Dropzone>

      <Dropzone onDrop={handleDropImage}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <div className='flex'>
           <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 w-[400px]"  style={{ backgroundImage: `url(${imagenes[2]})` }}>
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 w-[400px]"  style={{ backgroundImage: `url(${imagenes[3]})` }}>
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          </div>
          </div>
        )}
      </Dropzone>


 
         

      
        </div>
      </div>
    </div>

    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Vehicle information</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3 md:ml-[50px] sm:ml-[50px] xxs:ml-[50px]  xxxs:ml-[50px]">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Number of kilometers</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full  border-indigo-600 border-0.5 rounded-lg  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              onChange={(e) => setKilometres(e.target.value)}
            />
          </div>
        </div>

        <div class="sm:col-span-3 xxs:ml-[50px] xxxs:ml-[50px]">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Vehicle year</label>
          <div class="mt-2">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full  border-indigo-600 border-0.5 rounded-lg  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             onChange={(e) => setYear(e.target.value)}
            />
          </div>
        </div>

        
        <div>

        </div>

        <div class="sm:col-span-4 xxs:ml-[50px] xxxs:ml-[50px]">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Price USD</label>
          <div class="mt-2">
            <input id="text" name="text" type="text" class="block w-full  border-indigo-600 border-0.5 rounded-lg  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        
        <div class="sm:col-span-3 md:ml-[50px] sm:ml-[50px] xxs:ml-[50px]  xxxs:ml-[50px]">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Your Location</label>
          <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name" class="block w-full  border-indigo-600 border-0.5 rounded-lg  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" 
             onChange={(e) => setLocation(e.target.value)}
            >
              <option></option>
              <option>BuenosAires</option>
              <option>Cordoba</option>
              <option>Corrientes</option>
              <option>Santa Fe</option>
              <option>Entre Rios</option>
              <option>La Rioja</option>
              <option>Mendoza</option>
              <option>Misiones</option>
              <option>Neuquen</option>
              <option>Salta </option>
              <option>San Luis</option>
              <option></option>
            </select>
          </div>
        </div>

       

        <div class="sm:col-span-3 xxs:ml-[50px] xxxs:ml-[50px]">
          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Brand</label>
          <div class="mt-2">
          <select id="country" name="country" autocomplete="country-name" class="block w-full  border-indigo-600 border-0.5 rounded-lg  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
           onChange={(e) => setBrand(e.target.value)}
          >
              <option>Volkswagen</option>
              <option>Fiat</option>
              <option>Ford</option>
              <option>Mercedes Benz</option>
              <option>Audi</option>
              <option>Hiunday</option>
              <option>BMW</option>
              <option>Suzuki</option>
              <option>Renault </option>
              <option>Toyota</option>
              <option></option>
            </select>
          </div>
        </div>

      
        <div class="sm:col-span-4 2xl:ml-[320px] xl:ml-[260px] lg:ml-[250px] md:ml-[250px] sm:ml-[200px] xxs:ml-[50px]  xxxs:ml-[50px]">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Telephone contact</label>
          <div class="mt-2">
            <input id="email" name="text" type="text" autocomplete="email" class="block w-full  border-indigo-600 border-0.5 rounded-lg  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
       

        
      </div>
    </div>

    
  </div>

  <div class="mt-6 flex items-center justify-center gap-x-6" >
    <button type="button" class="text-sm font-semibold leading-6 text-gray-900 justify-center">Cancel</button>
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => postMyCar()}>
      Post
    </button>
  </div>
</form>



    </div>
  );
};

export default ClouddinarPrueba;


/*  */