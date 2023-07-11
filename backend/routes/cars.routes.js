import express from "express"
const carsRoutes = express.Router()
import { getAllCars, getCarById, saveNewCar, saveInFavs, getFavs } from "../controllers/cars.js";

carsRoutes.get("/getAllCars", getAllCars)
carsRoutes.get("/getOneCar/:id", getCarById)
carsRoutes.post("/newCar/:id", saveNewCar)
carsRoutes.post("/setFav", saveInFavs)
carsRoutes.get("/getFavs/:id", getFavs)



export default carsRoutes;