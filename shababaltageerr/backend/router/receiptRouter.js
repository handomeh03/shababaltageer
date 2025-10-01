import express from "express";
import { addreceipt } from "../controller/receiptController.js";
import multer from "multer";
import { Authorization } from "../Middleware/Authorization.js";
export const receiptRouter=express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

receiptRouter.post("/addreceipt/:event_id",Authorization,upload.single("receipt"),addreceipt)