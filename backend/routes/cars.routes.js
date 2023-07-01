import express from "express"
const carsRoutes = express.Router()
import { getAllCars, getCarById } from "../controllers/cars.js";

carsRoutes.get("/getAllCars", getAllCars)
carsRoutes.get("/getOneCar/:id", getCarById)

export default carsRoutes;