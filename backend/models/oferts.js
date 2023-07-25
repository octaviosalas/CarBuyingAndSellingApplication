import mongoose from "mongoose";
const { Schema } = mongoose;

const ofertsSchema = mongoose.Schema( { 
    interestedId: { 
        type: String
    },
    sellerId: { 
        type: String
    },
    amount: { 
        type: Number
    },
    publicationId: { 
        type: String
    }

    
})

const Oferts = mongoose.model("Oferts", ofertsSchema)

export default Oferts;

