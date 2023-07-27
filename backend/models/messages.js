import mongoose from "mongoose";
const { Schema } = mongoose;

const messagesSchema = mongoose.Schema( { 
    name: { 
        type: String
    },
    date: { 
        type: String
    },
    amount: { 
        type: String
    },
    image: { 
        type: String
    },
    senderUser: { 
        type: String
    },
    userRecipient: { 
        type: String
    }
    
})

const Message = mongoose.model("Message", messagesSchema)

export default Message;


