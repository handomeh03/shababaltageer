import { useState } from "react";
import { UseEvent } from "../context/EventContext";
import { UseUser } from "../context/UserContext";

export function useEditEvent(){
    let {token}=UseUser();
    let{eventDispatch}=UseEvent(); 
    let [error,setError]=useState("");
    async function editEvent(name, description,location, numberOfMember,price,status,image,event_id,handlechangeFlag) {
        try {
            const res =await fetch(`${import.meta.env.VITE_API_URL}/api/event/editevent/${event_id}`,
                {
                   method:"PATCH",
                    body:JSON.stringify({name,location,description,image,status,number_of_members:Number(numberOfMember),price:Number(price)}),
                    headers:{
                         "Content-Type": "application/json",
                         "Authorization": `Bearer ${token}`, 
                 }
                }
            )
            const data=await res.json();

            if(res.ok){
                eventDispatch({type:"editEvent",payload:data.event});
                handlechangeFlag();
                setError("");
            }
            else{
                throw new Error(data.error);
            }
            
        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    }
    return {editEvent,error};
}