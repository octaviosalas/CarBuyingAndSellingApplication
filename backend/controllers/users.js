import User from "../models/users.js"
import bcrypt from "bcrypt"

export const login = async (req, res) =>  { 

   const {email, password} = req.body
   console.log(req.body)

   try {
      let userExist = await User.findOne({email: email})
      if(!userExist) { 
        res.json({message: "The email is not registered"})
      } else { 
        bcrypt.compare(password, userExist.password)
            .then((correct) => { 
                if(correct) { 
                    const {id, name, profileImage, email, password} = userExist;
                    res.json({
                         id: id,
                         name: name,
                         profileImage: profileImage,
                         email: email,
                         password: password
                        })
                    }else { 
                        res.json({message: "Password is Incorrect"})
                    }
            })
      }
   } catch (error) {
    res.send("I cant Find an user with that data! 👎")
    console.log(error)
   }
}


export const register = async (req, res) => { 
    
    const {name, password, email, telephone, profileImage} = req.body
    console.log(req.body)

    await User.findOne({email})
              .then((user) => { 
                if(user) { 
                    res.json({message: "The email exist in our DataBase. Please, select other"})
                } else if (!name || !email || !password) { 
                    res.json({message: "Data is missing to be able to register. Please complete all fields"})
                } else { 
                    console.log(req.body)
                    bcrypt.hash(password, 10, (err, passwordHash) => { 
                        if(err) res.json({err})
                        else { 
                            const newUser = new User ( { 
                                name: name,
                                password: passwordHash,
                                telephone: telephone,
                                email: email,
                                profileImage: profileImage
                            })
                             newUser.save()
                                    .then((user) => { 
                                        res.json({message: "Usuario creado correctamente", user})     
                                    })
                                    .catch((err) => console.log(err))               
                        }
                    })
                }
              })
}



export const getUserById = async (req, res) => { 
    const {id} = req.params
    console.log(id)

    User.find({_id: id})
    .then((exist) => { 
      res.json(exist)
    })
    .catch((err) => { 
      console.log(err)
    })
}



