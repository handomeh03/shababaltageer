import { useNavigate } from "react-router-dom";
import { UseUser } from "../context/UserContext";
import { useState } from "react";
export function UseLogin() {
    let navigate=useNavigate();
    let {userDispatch}=UseUser();
    let [errorLogin,setError]=useState("");

  async function login(national_number,password) {
    try {
       const res = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        body: JSON.stringify({ national_number, password }),
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
