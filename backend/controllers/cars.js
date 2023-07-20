import Cars from "../models/cars.js"
import Favs from "../models/favorites.js";
import Image from "../models/imagenes.js";

export const addCars = async (req, res) => {
    const cars = [
      {
        "id": 11,
        "name": "Fiat 500",
        "brand": "Fiat",
        "year": 2017,
        "img": ["https://http2.mlstatic.com/fiat-500-sport-D_NQ_NP_621957-MLM42535665776_072020-F.jpg", " https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Large/fiat/500/ar/RT_PU_4be6b6d4256d49c3804973b1c451b35e.webp ", "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO93ZiUPf9gyPQxjlOv3zfG4MENjD17pT2Dy66pciWHfojhkdcOz6CV3Ojp5gH5o8Ruag&usqp=CAU", " https://sbimotor.com/uploads/car/images/367517/3778350_big_b6649ff6.jpg"],
        "characteristics": ["Sports Car", "Two-Door", "Rear-Wheel Drive"],
        "engine": "V8",
        "color": "Red",
        "kilometres": 65000,
        "location": "Cordoba",
        "price": 18000,
        "seller": "Damian Sire",
        "type": "car",
        "fav": false
      },
      {
        "id": 12,
        "name": "Fiat Argo",
        "brand": "Fiat",
        "year": 2022,
        "img": ["https://www.familycar.com.ar/wp-content/uploads/2020/11/20201124_172709710_iOS.jpg", "https://http2.mlstatic.com/D_NQ_NP_637417-MLA70130029634_062023-O.webp  ", " https://www.clasicuyo.com.ar/Materiales//2023-06/07/medium/00440450.jpg ", "https://www.deruedas.com.ar/images/autos/Fiat-Argo-2018/556/556136_4_im.jpg?edit=3"],
        "characteristics": ["Sports Car", "Two-Door", "Rear-Wheel Drive"],
        "engine": "V8",
        "color": "Red",
        "kilometres": 72000,
        "location": "Cordoba",
        "price": 7900,
        "seller": "Sebastian Faccia",
        "type": "car",
        "fav": false
      },
      {
        "id": 13,
        "name": "Fiat Cronos",
        "brand": "Fiat",
        "year": 2021,
        "img": ["https://rodatiautos.ar/images/listings/2023-01/5edd9971-1673350426-638.jpg", " https://adminclasificados.lavoz.com.ar/files/imagecache/ficha_aviso_mobile_462_253/avisos/aviso_auto/aviso-auto--14232163.jpeg ", " https://cdn.motor1.com/images/mgl/PEEoK/s3/critica-fiat-cronos-1-3-s-design.jpg", "https://www.deruedas.com.ar/images/autos/500/500342_1_im.jpg"],
        "characteristics": ["Sports Car", "Two-Door", "Rear-Wheel Drive"],
        "engine": "V8",
        "color": "Red",
        "kilometres": 95000,
        "location": "Cordoba",
        "price": 7100,
        "seller": "Ricardo Beremberg",
        "type": "car",
        "fav": false
      },
      {
        "id": 14,
        "name": "Fiat Pulse",
        "brand": "Fiat",
        "year": 2022,
        "img": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTol_ZHJd9-U5X2ElGeLZyIo5oNTFmQMRfCk0TABNDhVbgJpHt75Vlf5BLntucR-ufSn5M&usqp=CAU", " https://carango.com.br/f.php?w=810&h=620&cc=0&zc=1&src=https://carango.nyc3.digitaloceanspaces.com/images/veiculos/2023/04/fiat-pulse-2022-pulse-drive-1-3-8v-flex-mec---flex-111458-65o20p.jpg  ", " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZB32dRU3EgASxlLuPg8hq0cdxzHvIrZXht_SWcNFDrCMaXf6mXDGTSywaXlXM0M34nE&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYERWZVG1ib9N6bNaEh4aHeEAgbdUj_uNCOWn4KscctKeB9bvLbhZLGMJT9EA2shDwEY&usqp=CAU"],
        "characteristics": ["Sports Car", "Two-Door", "Rear-Wheel Drive"],
        "engine": "V8",
        "color": "Red",
        "kilometres": 45000,
        "location": "Cordoba",
        "price": 98000,
        "seller": "Andrea Ramirez",
        "type": "van",
        "fav": false
      },
      {
        "id": 15,
        "name": "Suzuki Swift",
        "brand": "Suzuki",
        "year": 2013,
        "img": ["https://img-ar-2.trovit.com/1yM1OM1sy1LR/1yM1OM1sy1LR.1_11.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Mb13D-yKulinvN0mR2IJQmBWoN5vXIjq4ik73bK_AQTtEoxs6BQfI-JVOBDxq_KmPvo&usqp=CAU", "https://chileautos.pxcrush.net/chileautos/cars/private/17e8dqe53ki7ch0mzzpkhk3p2.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480 ", "https://http2.mlstatic.com/D_NQ_NP_880498-MCO52632211629_112022-O.webp" ],
        "characteristics": ["Sports Car", "Two-Door", "Rear-Wheel Drive"],
        "engine": "V8",
        "color": "Red",
        "kilometres": 5000,
        "location": "Cordoba",
        "price": 24000,
        "seller": "Ezequiel Miranda",
        "type": "car",
        "fav": false
      },
      {
        "id": 16,
        "name": "Suzuki Fun",
        "brand": "Suzuki",
        "year": 2009,
        "img": ["https://rodatiautos.ar/images/listings/2023-03/ed50caa4-1679656624-408.jpg", "https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Large/suzuki/fun/ar/RT_PU_33bfaaea0b2d412e8f365bebf4d6e65e.jpg  ", " https://i.autos.com.ar/fotos/2012/0420/Suzuki-Fun-14-AA-DH-5-PTAS-L-N-201204200903596.jpg", "https://i.autos.com.ar/fotos/2011/0716/Suzuki-Fun-14-NAFTA-2007-201107160616521.jpg"],
        "characteristics": ["Sports Car", "Two-Door", "Rear-Wheel Drive"],
        "engine": "V8",
        "color": "Black",
        "kilometres": 180000,
        "location": "Cordoba",
        "price": 4100,
        "seller": "Octavio Salas",
        "type": "car",
        "fav": false
      },
      {
        "id": 17,
        "name": "Hiunday Genesis V4",
        "brand": "Hiunday",
        "year": 2022,
        "img": ["https://chileautos.pxcrush.net/chileautos/cars/private/2sjdk1d65u55xj56uabdm5vqy.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2C600", " https://www.deruedas.com.ar/images/autos/424/424038_1_im.jpg ", " https://gcs.rimg.com.tw/g0/1e7/411/chese1001/3/2e/93/21928009232019_785.jpg", "https://static.cargurus.com/images/forsale/2023/04/30/21/36/2014_hyundai_genesis_coupe-pic-6350282051869421963-1024x768.jpeg"],
        "characteristics": ["Sports Car", "Two-Door", "Rear-Wheel Drive"],
        "engine": "V8",
        "color": "Red",
        "kilometres": 105000,
        "location": "Cordoba",
        "price": 13400,
        "seller": "Guido Diaz",
        "type": "car",
        "fav": false
      },
      {
        "id": 18,
        "name": "Hiunday Veloster",
        "brand": "Hiunday",
        "year": 2022,
        "img": ["https://imgcf.ecn.cl/600/cf/cf102dc9619482576cb914dad0e205c062ac40b3.bin.jpg", " https://autozofri.cl/Felipe/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-04-at-21.34.18-2.jpeg ", "https://ae01.alicdn.com/kf/HTB195k7hnZmx1VjSZFGq6yx2XXaR.jpg", "https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Large/hyundai/veloster/cl/RT_PU_0cf6a94ce3c7424b8d31f14fc6ed6b6d.webp"],
        "characteristics": ["Sports Car", "Two-Door", "Rear-Wheel Drive"],
        "engine": "V8",
        "color": "Red",
        "kilometres": 95000,
        "location": "Cordoba",
        "price": 21300,
        "seller": "Pedro Vercic",
        "type": "car",
        "fav": false
      },
    ];
    
  
    try {
      const info = await Cars.insertMany(cars);
      console.log(info);
      console.log("AGREGANDO AUTOS")
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
     console.log(req.body)
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

export const getFavs = async (req, res) => { 
    const {id} = req.params
    console.log(id)

    Favs.find({userId: id})
        .then((fav) => { 
          res.json(fav)
        })
        .catch(err => console.log(err))

}

export const deleteFav = async (req, res) => { 
  const {userId} = req.params
  const {carId: id} = req.body

  console.log("El id del auto es" + id)

  try {
    await Favs.deleteOne({userId, id})
    res.send("Eliminado correctamente")
  } catch (error) {
     console.log(error)
  } 

}

export const saveImages = () => { 

}