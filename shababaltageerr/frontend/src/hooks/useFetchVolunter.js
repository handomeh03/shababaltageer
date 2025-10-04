import { useEffect, useState } from "react";
import { UseUser } from "../context/UserContext";
import { useVolunter } from "../context/Volunter";

export function  useFetchVolunter(event_id){
    let {token}=UseUser();
    let{volunterDispatch}=useVolunter();
    let[loader,setLoader]=useState(false);

    useEffect(()=>{
          volunterDispatch({ type: "fetchvolunter", payload: [] });
            async function fetchVolunter() {
                try {
                    setLoader(true);
                    const res=await fetch(`${import.meta.env.VITE_API_URL}/api/volunter/getVolunter/event/${event_id}`,
                        {
                            method:"GET",
                            headers:{
                                 "Authorization": `Bearer ${token}`,
                            }
                        }
                    )
                    const data=await res.json();
                    if(res.ok){
                        volunterDispatch({type:"fetchvolunter",payload:data.volunters})
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
            fetchVolunter();
    },[volunterDispatch,event_id,token])
    return {loader};
}