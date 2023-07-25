import express from "express"
const ofertsRoutes = express.Router()
import {sendOfert, getMessages } from "../controllers/oferts.js";

ofertsRoutes.post("/sendOfert", sendOfert)
ofertsRoutes.get(`/getMessages/:userId`, getMessages)




export default ofertsRoutes;