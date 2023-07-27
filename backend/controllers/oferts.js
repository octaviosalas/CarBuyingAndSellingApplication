import Message from "../models/messages.js";
import Oferts from "../models/oferts.js"

export const sendOfert = async (req, res) => { 
    console.log(req.body)
    const {amount, sellerId, interestedId, publicationId, interested, interestedImage, vehicle, date} = req.body;
      

    try{ 
     const saveOfert = new Oferts ( { 
        amount: amount,
        sellerId: sellerId,
        interestedId: interestedId,
        publicationId: publicationId,
        interested: interested,
        interestedImage: interestedImage,
        vehicle: vehicle,
        date: date
     })
     saveOfert.save()
              .then((of) => { 
               res.json({message: "The ofer was send Correctly", of})
              })
              .catch((err) => { 
                console.log(err)
              })
    }catch(err) { 
         console.log(err)
    }
}


export const getMessages = async (req, res) => { 
 
  const {userId} = req.params
 
 
  Oferts.find({sellerId: userId})
        .then((exist) => { 
          res.json(exist)
        })
        .catch((err) => { 
          console.log(err)
        })

        
}


export const sendMessage = async (req, res) => { 
  console.log(req.body)
  const {name, date, amount, image, senderUser, userRecipient} = req.body;

  try{ 
    const saveMessage = new Message ( { 
      name: name,
      date: date,
      amount: amount,
      image: image,
      senderUser: senderUser,
      userRecipient: userRecipient
    })
    saveMessage.save()
             .then((msj) => { 
              res.json({message: "The message was send and save Correctly", msj})
             })
             .catch((err) => { 
               console.log(err)
             })
   }catch(err) { 
        console.log(err)
   }
}

export const getConversation = async (req, res) => { 

  const {userId} = req.params
 
 
  Message.find({senderUser: userId})
        .then((exist) => { 
          res.json(exist)
        })
        .catch((err) => { 
          console.log(err)
        })
}


export const messagesReceived = async (req, res) => { 

  const {userId} = req.params
 
 
  Message.find({userRecipient: userId})
        .then((exist) => { 
          res.json(exist)
        })
        .catch((err) => { 
          console.log(err)
        })
}

export const deleteOfert =  async (req, res) => { 
     const {id} = req.params
     
     Oferts.findOneAndDelete({_id: id})
           .then((of) => { 
            res.json({message: "The offert has been rejected", of})
           })
           .catch((err) => console.log(err))
}