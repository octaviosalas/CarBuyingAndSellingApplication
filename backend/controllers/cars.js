import Cars from "../models/cars.js"
import Favs from "../models/favorites.js";


export const addCars = async (req, res) => {
    const cars = [
        {
            "id": 1,
            "name": "Ford Mustang",
            "brand": "Ford",
            "year": 2022,
            "img": "https://www.ford.com.ar/content/dam/Ford/website-assets/latam/ar/nameplate/mustang/mustang-2021/colorizer/gris-magnetico/far-mustang-fighter.jpg.dam.full.high.jpg/1622062692337.jpg",
            "characteristics": ["Sports Car", "Two-Door", "Rear-Wheel Drive"],
            "engine": "V8",
            "color": "Red",
            "kilometres": 5000,
            "country": "Usa"  
          },
          {
            "id": 2,
            "name": "Toyota Camry",
            "brand": "Toyota",
            "year": 2021,
            "img": "https://media.toyota.com.ar/0a24c7cb-6aa4-4f55-9d73-2c1bd16d54c9.png",
            "characteristics": ["Sedan", "Four-Door", "Front-Wheel Drive"],
            "engine": "Inline-4",
            "color": "Silver",
            "kilometres": 10000,
            "country": "Japan"  
          },
          {
            "id": 3,
            "name": "BMW X5",
            "brand": "BMW",
            "year": 2020,
            "img": "https://cdn.motor1.com/images/mgl/lAOqE/s3/2019-bmw-x5-xdrive45e.jpg",
            "characteristics": ["SUV", "Four-Door", "All-Wheel Drive"],
            "engine": "Inline-6",
            "color": "Black",
            "kilometres": 8000,
            "country": "Germany"  
          },
          {
            "id": 4,
            "name": "Honda Civic",
            "brand": "Honda",
            "year": 2022,
            "img": "https://cdn.motor1.com/images/mgl/WV6rr/s1/lanzamiento-honda-civic-2017.webp",
            "characteristics": ["Sedan", "Four-Door", "Front-Wheel Drive"],
            "engine": "Inline-4",
            "color": "White",
            "kilometres": 2000,
            "country": "Japan"  
          },
          {
            "id": 5,
            "name": "Chevrolet Silverado",
            "brand": "Chevrolet",
            "year": 2021,
            "img": "https://www.chevrolet.com.co/bypass/gmccontenthub/chevrolet/gm-co/colorizer_silverado/images/colorizer/01-blanco/2023-colorizer-silverado-blanco-01.png",
            "characteristics": ["Pickup Truck", "Four-Door", "Rear-Wheel Drive"],
            "engine": "V8",
            "color": "Blue",
            "kilometres": 15000,
            "country": "Usa"  
          },
          {
            "id": 6,
            "name": "Audi A4",
            "brand": "Audi",
            "year": 2019,
            "img": "https://cf-cdn-v5.audi.at/media/FullWidthSlider_Detail_Image_Component/75218-793969-491676-793970-491677-image/dh-1185-d7c8a4/a8c62064/1680531582/frontside.jpeg",
            "characteristics": ["Sedan", "Four-Door", "Front-Wheel Drive"],
            "engine": "Inline-4",
            "color": "Gray",
            "kilometres": 12000,
            "country": "Alemania"  
          },
          {  "id": 7,
            "name": "Mercedes-Benz C-Class",
            "brand": "Mercedes-Benz",
            "year": 2020,
            "img": "https://imgd.aeplcdn.com/0X0/n/cw/ec/116201/new-c-class-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75",
            "characteristics": ["Sedan", "Four-Door", "Rear-Wheel Drive"],
            "engine": "Inline-4",
            "color": "Silver",
            "kilometres": 9000,
            "country": "Alemania"  
          },
          {
            "id": 8,
            "name": "Chevrolet Camaro",
            "brand": "Chevrolet",
            "year": 2022,
            "img": "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/performance/2018-camaro-conversivel/colorizer/01-images/novo-camaro-conversivel-2018-amarelo-mov-intro-01.png?imwidth=960",
            "characteristics": ["Sports Car", "Two-Door", "Rear-Wheel Drive"],
            "engine": "V8",
            "color": "Yellow",
            "kilometres": 3000,
            "country": "Usa"  
          },
          {
            "id": 9,
            "name": "Nissan Altima",
            "brand": "Nissan",
            "year": 2021,
            "img": "https://www.motortrend.com/uploads/sites/10/2022/01/2022-nissan-altima-sr-sedan-angular-front.png?fit=around%7C875:492.1875",
            "characteristics": ["Sedan", "Four-Door", "Front-Wheel Drive"],
            "engine": "Inline-4",
            "color": "Black",
            "kilometres": 5000,
            "country": "Usa"  
          },
          {
            "id": 10,
            "name": "Volkswagen Gol Trend",
            "brand": "Volkswagen",
            "year": 2020,
            "img": "https://sudamerics.com.ar/wp-content/uploads/2019/10/VW_Gol_Trend.jpg",
            "characteristics": ["Hatchback", "Four-Door", "Front-Wheel Drive"],
            "engine": "Inline-4",
            "color": "Blue",
            "kilometres": 8000,
            "country": "Germany"  
          }
    ];
    
  
    try {
      const info = await Cars.insertMany(cars);
      console.log(info);
      res.status(200).json({ message: 'Hoteles agregados correctamente' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al agregar hoteles' });
    }
  };
 


 
  export const getAllCars = (req, res) => { 
    Cars.find()
          .then((car) => {
                    res.send(car);
           })
          .catch((err) => {
                    console.log(err);
                    res.status(500).send("Error al obtener los autos");
            });
}

export const getCarById = async (req, res) => { 
  const {id} = req.params
  console.log(req.params)

 Cars.find({id: id})
       .then((car) => { 
          res.json(car)
       })
       .catch((err) => { 
          console.log(err)
       })
}

export const saveNewCar = async (req, res) => { 
     
}

export const saveInFavs = async (req, res) => { 
    const {carId, userId, carName, carBrand, carKms, carSeller, carImg, carPrice} = req.body


    try {
      const newCarToBeSaved = new Favs ( { 
        carId: carId,
        userId: userId,
        carName: carName,
        carBrand: carBrand,
        carKms: carKms,
        carSeller: carSeller,
        carImg: carImg,
        carPrice: carPrice
    })
    newCarToBeSaved.save()
            .then((car) => { 
                res.json({message: "The car was saved in your Favs!", car})     
            })
            .catch((err) => console.log(err)) 
    } catch (error) {
      console.log(error)
    }
}