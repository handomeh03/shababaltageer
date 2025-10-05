import initdb from "../db/connection.js";
import { verfiyToken } from "../utlis/token.js";

export async function Authorization(req,res,next){
   const authHeader = req.headers["authorization"];
   
  if (!authHeader) {
    return res.status(401).send({ error: "No token provided, unauthorized" });
  }
  const token = authHeader.split(" ")[1]; 
  try {
    const {id}=verfiyToken(token, process.env.SECRET_KEY)
    let db= await initdb();

    let [row]=await db.execute("select  full_name,phonenumber,location,age,role,description from users where  user_id = ?",
      [
        id
      ]
    )
    if(row.length==0){
      return res.status(404).send({error:"user not found"});
    }
    let {full_name, phonenumber, location, age,role, description}=row[0];
    req.user ={id,full_name, phonenumber, location, age,role, description} ; 
    next(); 
  } catch (err) {
    return res.status(401).send({ error: "Invalid or expired token" });
  }
}