import express from "express"
const ofertsRoutes = express.Router()
import {sendOfert, getMessages, getConversation, sendMessage } from "../controllers/oferts.js";

ofertsRoutes.post("/sendOfert", sendOfert)
ofertsRoutes.get(`/getMessages/:userId`, getMessages)
ofertsRoutes.post("/sendMessage", sendMessage)
ofertsRoutes.get("/getConversations/:userId", getConversation)



export default ofertsRoutes;