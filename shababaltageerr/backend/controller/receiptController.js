import initdb from "../db/connection.js";

export async function addreceipt(req,res) {
   let { event_id } = req.params;
   let { id: user_id } = req.user;
   const { amount } = req.body;

   if(isNaN(Number(event_id))){
      return res.status(400).send({ error: "التطوع غير موجود" });
   }
   if(!amount){
      return res.status(400).send({ error: "الرجاء ادخال قيمة البلغ" });
   }
   if(!req.file){
      return res.status(400).json({ error: "الصورة مطلوبة" });
   } 

   try {
      let db = await initdb();

      let [event] = await db.execute("SELECT * FROM events WHERE event_id = ?", [event_id]);
      if(event.length === 0) return res.status(400).send({ error: "event not found" });
      if(Number(amount) !== event[0].price) return res.status(400).send({ error: "الرجاء دفع المبلغ المطلوب" });

      let [userevent] = await db.execute("SELECT * FROM userevent WHERE user_id = ? AND event_id = ?", [user_id, event_id]);
      if(userevent.length > 0) return res.status(409).send({ error: "انت مسجل في هذا التطوع من قبل" });

      await db.execute("INSERT INTO userevent(user_id,event_id) VALUES (?,?)", [user_id, event_id]);

      const imagePath = req.file.path;

      let [receipt] = await db.execute(
        "INSERT INTO receipt (event_id, user_id, image, amount) VALUES (?, ?, ?, ?)",
        [event_id, user_id, imagePath, amount]
      );

      return res.status(201).json({ message: "تم حفظ الوصل بنجاح", receiptId: receipt.insertId });
    
   } catch (error) {
      console.log(error);
      return res.status(500).send({ error: "internal server error" });
   }
}
