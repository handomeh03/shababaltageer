import { useNavigate } from "react-router-dom";
import { UseUser } from "../context/UserContext";
import { useState } from "react";
export function UseLogin() {
    let navigate=useNavigate();
    let {userDispatch}=UseUser();
    let [errorLogin,setError]=useState("");

  async function login(phonenumber,password) {
    try {
       const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user/login`, {
        method: "POST",
        body: JSON.stringify({ phonenumber, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      
      if (res.ok) {
        localStorage.setItem("token",JSON.stringify(data.token));
        userDispatch({type:"token",payload:data.token})
        navigate("/");
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
       setError(error.message);
    
    }
  }
  return{login,errorLogin};
}
