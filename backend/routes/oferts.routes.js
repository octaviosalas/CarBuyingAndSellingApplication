import express from "express"
const ofertsRoutes = express.Router()
import {sendOfert, getMessages, getConversation, sendMessage, messagesReceived, deleteOfert } from "../controllers/oferts.js";

ofertsRoutes.post("/sendOfert", sendOfert)
ofertsRoutes.get(`/getMessages/:userId`, getMessages)
ofertsRoutes.post("/sendMessage", sendMessage)
ofertsRoutes.get("/getConversations/:userId", getConversation)
ofertsRoutes.get("/getMessagesReceived/:userId", messagesReceived)
ofertsRoutes.delete("/deleteOfert/:id", deleteOfert)



export default ofertsRoutes;