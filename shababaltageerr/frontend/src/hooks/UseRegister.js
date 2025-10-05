import { useNavigate } from "react-router-dom";
import { UseUser } from "../context/UserContext";
import { useState } from "react";

export function UseRegister() {
 let navigate=useNavigate();
  let { userDispatch } = UseUser();
  let [registerError,setError]=useState("");
  async function Register( full_name,phonenumber,location,age,description,password) {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user/register`, {
        method: "POST",
        body: JSON.stringify({
          full_name,
          phonenumber,
          location,
          age,
          description,
          password,
          
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", JSON.stringify(data.token));
        userDispatch({ type: "token", payload:data.token });
        navigate("/");
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      setError(error.message)
    }
  }
  return {Register,registerError};
}
