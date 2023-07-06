import express from "express"
const usersRoutes = express.Router()
import { login, register, getUserById } from "../controllers/users.js";

usersRoutes.post("/register", register)
usersRoutes.post("/login", login)
usersRoutes.get("/getUserById/:id", getUserById)

export default usersRoutes;