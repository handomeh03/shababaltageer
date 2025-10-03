import express from "express";
import dotenv from "dotenv";
import initdb from "./db/connection.js";
import cors from "cors";
import { userRouter } from "./router/UserRouter.js";
import { eventRouter } from "./router/eventRouter.js";
import { VolunterRouter } from "./router/volunterRouter.js";
import { receiptRouter } from "./router/receiptRouter.js";
dotenv.config();
const app=express();

app.use(express.json());
app.use(cors({
    origin:"https://shababaltageer.vercel.app"
}));

app.use((req,res,next)=>{
    console.log(req.url);
    console.log(req.method);
    next();    
})

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use("/api/user",userRouter);
app.use("/api/event",eventRouter);
app.use("/api/volunter",VolunterRouter);
app.use("/api/receipt",receiptRouter)
initdb().then(
    app.listen(process.env.PORT || 3000,()=>{
    console.log("the sever is run at "+ process.env.PORT || 3000)
})

).catch((e)=>{
    console.log(e);
})

