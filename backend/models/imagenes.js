import mongoose from "mongoose";
const { Schema } = mongoose;


const imagesSchema = mongoose.Schema( { 
    img: { 
        type: String
    }
})

const Images = mongoose.model("Images", imagesSchema)

export default imagesSchema;
