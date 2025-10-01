import jwt from "jsonwebtoken"
export function createtoken(id,full_name, national_number, location, age, description,phoneNumber){
    return jwt.sign({id,full_name, national_number, location, age, description},process.env.SECRET_KEY,{expiresIn:"2h"})
}
export function verfiyToken(token, SECRET_KEY){
    return jwt.verify(token,SECRET_KEY);
}