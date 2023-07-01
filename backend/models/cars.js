import mongoose from "mongoose";

const carsSchema = mongoose.Schema( { 
    id: { 
        type: Number
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
    }
    
})

const Cars = mongoose.model("Cars", carsSchema)

export default Cars;

