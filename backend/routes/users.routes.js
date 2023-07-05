import express from "express"
const usersRoutes = express.Router()
import { login, register } from "../controllers/users.js";

usersRoutes.post("/register", register)
usersRoutes.get("/login", login)

export default usersRoutes;