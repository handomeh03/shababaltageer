import express from "express";
import { getVolunter } from "../controller/VolunterController.js";
import { Authorization } from "../Middleware/Authorization.js";
import { CheckAdmin } from "../Middleware/checkadmin.js";

export const VolunterRouter=express.Router();

VolunterRouter.get("/getVolunter/event/:eventID",Authorization,CheckAdmin,getVolunter)