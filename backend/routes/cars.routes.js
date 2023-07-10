import express from "express"
const carsRoutes = express.Router()
import { getAllCars, getCarById, saveNewCar, saveInFavs } from "../controllers/cars.js";

carsRoutes.get("/getAllCars", getAllCars)
carsRoutes.get("/getOneCar/:id", getCarById)
carsRoutes.post("/newCar/:id", saveNewCar)
carsRoutes.post("/setFav", saveInFavs)



export default carsRoutes;