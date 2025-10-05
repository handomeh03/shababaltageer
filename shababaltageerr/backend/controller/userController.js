import initdb from "../db/connection.js";
import bcrypt from "bcrypt";
import { createtoken } from "../utlis/token.js";

export async function register(req, res) {
  let { full_name, phonenumber, location, age, description, password } =
    req.body;

  try {
    let db = await initdb();
    let [row] = await db.execute(
      "select * from users where phonenumber = ? ",
      [phonenumber]
    );
    if (row.length > 0) {
      return res.status(400).send({ error: "المستخدم موجود بالفعل" });
    }
    let salat = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(password, salat);

    //success register
    let [user]=await db.execute(
      "INSERT INTO users (full_name, national_number, location, age, description, password,phoneNumber) VALUES (?, ?, ?, ?, ?, ?,?)",
      [full_name, phonenumber, location, age, description, hashPassword]
    );
    // create jsonwebtoken
    

    let token = createtoken(
      user.insertId,
      full_name,
      phonenumber,
      location,
      age,
      description,
    );

    return res.status(200).send({token});
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "internel server error" });
  }
}
export async function login(req, res) {
  let {phonenumber, password } = req.body;
  try {
    let db = await initdb();
    let [row] = await db.execute(
      "select * from users where phonenumber = ? ",
      [phonenumber]
    );
    if(row.length==0){
        return res.status(400).send({error:"عليك ان تنشئ حساب قبل عملية الدخول"})
    }
    let match=await bcrypt.compare(password,row[0].password);
    if(!match){
        res.status(400).send({error:"كلمة السر او الرقم الوطني غير صحيحات"});
    }

    //destructre the information to display in respone
    let { user_id,full_name,location,age,description}=row[0];

    let token=createtoken(user_id ,full_name, phonenumber,location,age,description);
    return res.status(200).send({token})
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "internel server error" });
  }
}
export async function getUser(req,res) {
  let {id}=req.user;
  try {
    let db=await initdb();
    let [row]=await db.execute("select full_name,phonenumber,location,age,role,description from users where  user_id = ?",
      [
        id
      ]
    )
    if(row.length==0){
      res.status(400).send({error:"المستخدم غير موجود"});
    }
    let{full_name,phonenumber,location,age,role,description}=row[0];
    return res.status(200).send({user:{full_name,phonenumber,location,age,role,description}});
    

  } catch (error) {
     console.log(error);
    res.status(500).send({ error: "internel server error" });
  }
  
}
