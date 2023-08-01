import React from 'react';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const AutosSimilares = ({cars}) => {
     
   
  const randomCompare = () => Math.random() - 0.4;
  const randomCars = cars.sort(randomCompare);
  const randomFiveCars = randomCars.slice(0, 4);

    const refresh = () => { 
        setTimeout(() => { 
            window.location.reload()
        }, 50)

    }


 
    return (
        <div className="grid grid-cols-4 gap-4 lg:ml-[50px] md:ml-[60px] 2xl:flex xl:flex lg:flex md:flex sm:inline-block xxxs:inline-block xxs:inline-block">
          {randomFiveCars.map(car => (
            <div key={car.id} className="p-4 border border-gray-200 rounded">
              <img src={car.img[0]} alt={car.brand} className="w-full mb-2 h-[130px]" />
              <h3 className="text-lg font-semibold sm:text-[15px]">{car.name}</h3>
              <p className="text-gray-500">{car.kilometres} Kms  </p>
              <hr />
            <Link to={`/carDetail/${car.id}`}><button className=" btn h-[9px] w-[95px] text-[10px] mt-[5px] text-blue-600 bg-white border-none" onClick={() => refresh()}>View More</button> </Link>  
            </div>
          ))}
        </div>
      );
};

export default AutosSimilares;


