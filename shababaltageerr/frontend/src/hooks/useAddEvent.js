import { UseEvent } from "../context/EventContext";
import { UseUser } from "../context/UserContext";

export function useAddEvent(){
    let {token}=UseUser();
    let{eventDispatch}=UseEvent();
    async function  addEvent(name, description,location, numberOfMember,price,status,image) {
        try {
            const res=await fetch("http://localhost:8080/api/event/addevent",
                {
                    method:"POST",
                    body:JSON.stringify({name,location,description,image,status,number_of_members:Number(numberOfMember),price:Number(price)}),
                    headers:{
                         "Content-Type": "application/json",
                         "Authorization": `Bearer ${token}`, 
                 }
                }
            )
            const data=await res.json();
            if(res.ok){
                eventDispatch({type:"addEvent",payload:data.event});
                console.log(data.event);
            }
            else{
                throw new Error(data.error);
            }
            
        } catch (error) {
            console.log(error);
        }

        
    }
    return {addEvent};
}