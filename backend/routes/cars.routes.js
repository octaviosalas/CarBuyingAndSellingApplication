import express from "express"
const carsRoutes = express.Router()
import { getAllCars } from "../controllers/cars.js";

carsRoutes.get("/getAllCars", getAllCars)

export default carsRoutes;