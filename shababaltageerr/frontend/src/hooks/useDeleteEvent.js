import { UseEvent } from "../context/EventContext";
import { UseUser } from "../context/UserContext";

export function useDeleteEvent(){
     let {token}=UseUser();
     let{eventDispatch}=UseEvent();
    async function delteEvent(id) {
       try {
        const res=await fetch(`${import.meta.env.VITE_API_URL}/api/event/${id}`,
            {
                method:"DELETE",
                headers:{
                         "Authorization": `Bearer ${token}`, 
                 }
            }
        )
        const data=await res.json();
        if(res.ok){
            console.log(data);
            eventDispatch({type:"deleteEvent",payload:data.deletedEvent});
        }
        else{
            throw new Error(data.error);
        }
        
       } catch (error) {
        console.log(error);
       }       
    }
    return {delteEvent};
}