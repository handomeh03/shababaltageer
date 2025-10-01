import express from "express";
import { addEvent, deleteEvent, editEvent, getAllEvents, getMyEvent } from "../controller/eventController.js";
import { Authorization } from "../Middleware/Authorization.js";
import { CheckAdmin } from "../Middleware/checkadmin.js";
import { addeventShcema, addEventValid } from "../Middleware/addeventValidator.js";
import { editEventSchema, EditEventValid } from "../Middleware/editEventValidator.js";
export const eventRouter=express.Router();
eventRouter.get("/",getAllEvents);
eventRouter.delete("/:id",Authorization,CheckAdmin,deleteEvent)
eventRouter.post("/addevent",Authorization,CheckAdmin,addEventValid(addeventShcema),addEvent);
eventRouter.patch("/editevent/:id",Authorization,CheckAdmin,EditEventValid(editEventSchema),editEvent);
eventRouter.get("/getMyEvent",Authorization,getMyEvent);