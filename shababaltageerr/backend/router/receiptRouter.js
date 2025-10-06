import express from "express";
import { addreceipt } from "../controller/receiptController.js";
import { Authorization } from "../Middleware/Authorization.js";
import upload from "../utlis/cloudinaryConfig.js";
export const receiptRouter=express.Router();


receiptRouter.post("/addreceipt/:event_id",Authorization,upload.single("receipt"),addreceipt)