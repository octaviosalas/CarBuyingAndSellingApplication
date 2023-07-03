import User from "../models/users.js"
import bcrypt from "bcrypt"

export const login = async (req, res) =>  { 

}


export const register = async (req, res) => { 
    
    const {name, password, email, telephone} = req.body
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
                                email: email
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
