import Reviews from "../models/reviews.js";

export const sendReview = async (req, res) => { 
     console.log(req.body)
     const {criticalName, criticalId, stars, evaluatedId, evaluatedName, comment, commentDate} = req.body;
     try{ 
          const saveNewReview = new Reviews ( { 
               criticalName: criticalName,
               criticalId: criticalId,
               stars: stars,
               evaluatedId: evaluatedId,
               evaluatedName: evaluatedName,
               comment: comment,
               commentDate: commentDate 
          })
          saveNewReview.save()
                       .then((rev) => { 
                        res.json({message: "Your opinion was send Correctly. Thanks!", rev})
                       })
                       .catch((err) => console.log(err))
         }catch(err) { 
            console.log(err)
         }
     
}

export const getReviews = async (req, res) => { 
     const {id} = req.params

     Reviews.find({evaluatedId: id})
            .then((exist) => { 
               res.json(exist)
            })
            .catch((err) => { 
               console.log(err)
            })
}