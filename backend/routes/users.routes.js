import express from "express"
const usersRoutes = express.Router()
import { login, register, getUserById, editUserData } from "../controllers/users.js";

usersRoutes.post("/register", register)
usersRoutes.post("/login", login)
usersRoutes.get("/getUserById/:id", getUserById)
usersRoutes.put("/changeUserData/:id", editUserData)

export default usersRoutes;