import express from "express";
import { getUser, login, register } from "../controller/userController.js";
import { registerSchema, registerValid } from "../Middleware/registerValidator.js";
import { loginSchema, loginValid } from "../Middleware/loginValidator.js";
import { Authorization } from "../Middleware/Authorization.js";
export const userRouter=express.Router();
userRouter.post("/register",registerValid(registerSchema),register);
userRouter.post("/login",loginValid(loginSchema),login);
userRouter.get("/getuser",Authorization,getUser);
