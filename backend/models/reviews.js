import mongoose from "mongoose";


const reviewsSchema = mongoose.Schema( { 
    criticalName: { 
        type: String
    }, 
    criticalId: {  
        type: String
    },
    stars: { 
        type: String
    },
    evaluatedId: { 
        type: String
    }, 
    evaluatedName: { 
        type: String
    },
    comment: { 
        type: String
    },
    commentDate: { 
        type: String
    }, 
   
})

const Reviews = mongoose.model("Reviews", reviewsSchema)

export default Reviews;

