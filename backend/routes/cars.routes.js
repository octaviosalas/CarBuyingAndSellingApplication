import express from "express"
const carsRoutes = express.Router()
import { getAllCars, getCarById, saveNewCar, saveInFavs, getFavs, deleteFav, getPublications, getCarsBySearch } from "../controllers/cars.js";

carsRoutes.get("/getAllCars", getAllCars)
carsRoutes.get("/getOneCar/:id", getCarById)
carsRoutes.post("/newCar", saveNewCar)
carsRoutes.post("/setFav", saveInFavs)
carsRoutes.get("/getFavs/:id", getFavs)
carsRoutes.post("/deleteFav/:userId", deleteFav)
carsRoutes.get("/getPublications/:userId", getPublications)
carsRoutes.get("/getCarsBySearch/:searchParam", getCarsBySearch)



export default carsRoutes;