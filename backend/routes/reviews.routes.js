import express from "express"
const reviewsRoutes = express.Router()
import {sendReview, getReviews } from "../controllers/reviews.js";

reviewsRoutes.post("/sendReview", sendReview)
reviewsRoutes.get("/getReviews/:id", getReviews)

export default reviewsRoutes;