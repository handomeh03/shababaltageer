export function CheckAdmin(req,res,next){
 let user=req.user;
 
 if(!user){
   return res.status(401).send({error:"user not found"});
 }
 if(user.role != "admin"){
  return  res.status(403).send({error:"you are not authorized"});
 }
 next();

}