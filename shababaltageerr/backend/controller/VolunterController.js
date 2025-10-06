import initdb from "../db/connection.js";

export async function getVolunter(req,res){
    let{eventID}=req.params;
    if(isNaN(Number(eventID))){
        return res.status(400).send({error:"eventId not a number"});
    }
    try {
        let db =await initdb();
        let [event]=await db.execute("select * from events where event_id = ? ",
            [
                eventID
            ]
        )
        if(event.length==0){
            return res.status(400).send({error:"event not found"});
        }
        let [volunter]=await db.execute("SELECT u.user_id,  u.full_name,  u.phonenumber,  u.location,  u.age,  r.amount AS paid_amount,  r.image AS receipt_image FROM users u JOIN receipt r ON u.user_id = r.user_id WHERE r.event_id = ? ",
            [
                eventID
            ]
        )
        if(volunter.length==0){
            return res.status(400).send({error:"no volunter found"})
        }
        //make the photo url
         volunter = volunter.map(v => ({
           ...v,
           receipt_image: `${process.env.URL_SERVER || process.env.URL }/uploads/${v.receipt_image}`
            }));

        return res.status(200).send({volunters:volunter})
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"internel server error"});
    }
}