import React from 'react';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const AutosSimilares = ({cars}) => {
     
   
    const onlyShowFive = cars.slice(0,4)

    const refresh = () => { 
        setTimeout(() => { 
            window.location.reload()
        }, 50)

    }


 
    return (
        <div className="grid grid-cols-4 gap-4">
          {onlyShowFive.map(car => (
            <div key={car.id} className="p-4 border border-gray-200 rounded">
              <img src={car.img[0]} alt={car.brand} className="w-full mb-2 h-[130px]" />
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p className="text-gray-500">{car.kilometres} Kilometres  </p>
              <hr />
            <Link to={`/carDetail/${car.id}`}><button className="btn btn-primary w-[95px] h-[15px] text-[10px]" onClick={() => refresh()}>View More</button> </Link>  
            </div>
          ))}
        </div>
      );
};

export default AutosSimilares;


