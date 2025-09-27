import { useEffect } from "react";
import { UseUser } from "../context/UserContext"

export function useFetchuser(){
    let {token,userDispatch}=UseUser();
        useEffect(()=>{
            async function fetchuser() {
                  try {
            const res=await fetch("http://localhost:8080/api/user/getuser",
                {
                    method:"GET",
                    headers:{
                         "Authorization": `Bearer ${token}`, 
                    }
                }
            )
            const data=await res.json();
            if(res.ok){
                // console.log(token);
                userDispatch({type:"fetchuser",payload:data.user})
                console.log(data.user);
            }
            else{
                throw new Error(data.error);
            }
            
        } catch (error) {
            console.log(error)
        }
            }

            fetchuser();

        },[])
        
    
}