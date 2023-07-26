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