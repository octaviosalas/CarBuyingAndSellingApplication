import express from "express"
const carsRoutes = express.Router()
import { getAllCars, getCarById, saveNewCar } from "../controllers/cars.js";

carsRoutes.get("/getAllCars", getAllCars)
carsRoutes.get("/getOneCar/:id", getCarById)
carsRoutes.post("/newCar/:id", saveNewCar)



export default carsRoutes;