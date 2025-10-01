import initdb from "../db/connection.js";

export async function addreceipt(req,res) {
   let{event_id}=req.params;
   let{id:user_id}=req.user;
   const { amount } = req.body;
   
   if(isNaN(Number(event_id))){
    return res.status(400).send({error:"التطوع غير موجود"});
   }
   if(!amount){
    return res.status(400).send({error:"الرجاء ادخال قيمة البلغ"});
   }

   if (!req.file){
         return res.status(400).json({ error: "الصورة مطلوبة" });
   } 

   try {

    let db=await initdb();

    let [event]=await db.execute("select * from events where event_id = ?  ",
        [
            event_id
        ]
    );

    if(event.length==0){
        return res.status(400).send({error:"event not found"});
    }
    if(Number(amount) != event[0].price){
           return res.status(400).send({error:"الرجاء دفع المبلغ المطلوب"})
    }

    await db.execute("insert into userevent(user_id,event_id) values(?,?)",
        [
            user_id,
            event_id
        ]
    )

    const imagePath = req.file.filename;

   let [receipt]= await db.execute("INSERT INTO receipt (event_id , user_id , image ,amount ) VALUES (?,?,?,?)", 
        [   
            event_id,
            user_id,
            imagePath,
            amount
       ]);

   return res.status(201).json({ message: "تم حفظ الوصل بنجاح", receiptId: receipt.insertId });

    
   } catch (error) {
    console.log(error);
    return res.status(500).send({error:"internel server error"});
   }

}