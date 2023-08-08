import mongoose from "mongoose";


const statsSchema = mongoose.Schema( { 
   publicationId: { 
    type: String
   }
})

const Stats = mongoose.model("Stats", statsSchema)

export default Stats;


