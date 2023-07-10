import mongoose from "mongoose";

const favsSchema = mongoose.Schema( { 
    carId: { 
        type: Number
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

