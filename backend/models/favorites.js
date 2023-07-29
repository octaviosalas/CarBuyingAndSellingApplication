//import mongoose from "mongoose";
import mongoose from "../database/connectdb.js"

const favsSchema = mongoose.Schema( { 
    carId: { 
        type: String
    },
    userId: { 
        type: String
    },
    carName: { 
        type: String
    }, 
    carBrand: { 
        type: String
    }, 
    carKms: { 
        type: String
    }, 
    carImg: { 
        type: String
    }, 
    carSeller: { 
        type: String
    }, 
    carPrice: { 
        type: String
    }
    
})

const Favs = mongoose.model("Favs", favsSchema)

export default Favs;

