import { UseUser } from "../context/UserContext";

export function useAddReceipt() {

    let{token}=UseUser();
  async function addReceipt(event_id, amount, rec_image,handlechangeflag2,handlechangeAlertFlag,handlechangeAlreadyinFlag,handlechangeErrorReceipt) {
    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("receipt", rec_image);
     try {
          handlechangeErrorReceipt("") ;
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/receipt/addreceipt/${event_id}`, {
      method: "POST",
      body: formData,
      headers: {
         "Authorization": `Bearer ${token}`
         }
    });

    const data = await res.json();
    if(res.ok){
        handlechangeflag2();
        handlechangeAlertFlag();
       
    }
    else{
        throw new Error(data.error);
    }
        
     } catch (error) {
        handlechangeErrorReceipt(error.message)
         handlechangeflag2();
        handlechangeAlreadyinFlag();
     }
    
  }
  return { addReceipt };
}
