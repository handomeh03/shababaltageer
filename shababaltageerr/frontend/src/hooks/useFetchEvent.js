import { useEffect, useState } from "react";
import { UseEvent } from "../context/EventContext";

export function useFetchEvent(){
    let {eventDispatch}=UseEvent();
    let [lodaer,setLoader]=useState(false);
    
    useEffect(()=>{
           async function fetchEvent() {
              try {
                setLoader(true);
                 const res=await fetch(`${import.meta.env.VITE_API_URL}/api/event/`);
                 const data=await res.json();
                if(res.ok){  
                  eventDispatch({type:"fetchEvent",payload:data.events})
                }
                else{
                    throw new Error(data.error);
                }
                
              } catch (error) {
                console.log(error)
              }finally{
                setLoader(false);
              }
    
           }
           fetchEvent();
        },[eventDispatch])
      return {lodaer}  ;
}