import express from "express"
const reviewsRoutes = express.Router()
import {sendReview, getReviews } from "../controllers/reviews.js";

reviewsRoutes.post("/sendReview", sendReview)
reviewsRoutes.get("/getReviews/:userId", sendReview)

export default reviewsRoutes;