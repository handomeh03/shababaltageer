import { useEffect, useState } from "react";
import { UseUser } from "../context/UserContext";
import { UseEvent } from "../context/EventContext";

export function useFetchMyevent(){
    let{token}=UseUser();
    let{eventDispatch}=UseEvent();
    let[loader,setLoader]=useState(false);
    useEffect(()=>{
        eventDispatch({type:"fetchMyevent",payload:[]});
         async function fetchmyevent() {
            try {
                setLoader(true);
                const res=await fetch("http://localhost:8080/api/event/getMyEvent",
                    {
                         headers: {
                             "Authorization": `Bearer ${token}`
                               }
                    }
                );
                const data=await res.json();
                if(res.ok){
                    eventDispatch({type:"fetchMyevent",payload:data.myevent})
                    
                }
                else{
                    throw new Error(data.error);
                }
                
            } catch (error) {
                console.log(error);
            }finally{
                setLoader(false);
            }
            
         }
         fetchmyevent();
    },[eventDispatch,token])
    return {loader};
}