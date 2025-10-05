import jwt from "jsonwebtoken"
export function createtoken(id,full_name,phonenumber, location, age, description){
    return jwt.sign({id,full_name, phonenumber, location, age, description},process.env.SECRET_KEY,{expiresIn:"2h"})
}
export function verfiyToken(token, SECRET_KEY){
    return jwt.verify(token,SECRET_KEY);
}