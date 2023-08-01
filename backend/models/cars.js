import mongoose from "mongoose";


const carsSchema = mongoose.Schema( { 
     id: { 
          type: String
      },
    name: { 
        type: String
    },
    brand: { 
        type: String
    }, 
    year: { 
        type: String
    }, 
    img: { 
        type: [String]
    }, 
    characteristics: { 
        type: [String]
    }, 
    engine: { 
        type: String
    }, 
    color: { 
        type: String
    },
    kilometres: { 
        type:String
    },
    country:{ 
        String
    },
    price: { 
        type: Number
    },
    seller: { 
        type: String
    },
    description: { 
        type: String
    },
    phone: { 
        type: String
    },
    type: { 
        type: String
    },
    location: { 
        type: String,
    },
    sellerId: { 
        type: String
    },
    publicationDate: { 
        type: String
    }
    
})

const Cars = mongoose.model("Cars", carsSchema)

export default Cars;

