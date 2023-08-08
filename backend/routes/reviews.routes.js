import express from "express"
const reviewsRoutes = express.Router()
import {sendReview, getReviews, addVisit, getMyStats } from "../controllers/reviews.js";

reviewsRoutes.post("/sendReview", sendReview)
reviewsRoutes.get("/getReviews/:id", getReviews)
reviewsRoutes.post("/addVisit", addVisit)
reviewsRoutes.get("/getPublicationStats/:id", getMyStats)

export default reviewsRoutes;