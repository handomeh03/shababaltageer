import { useState } from "react";
import style from "../style/Login.module.css";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { UseLogin } from "../hooks/UseLogin";
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
export default function Login() {

  let[nationalNumber,setNationalNumber]=useState("");
  let[password,setPassword]=useState("");

  //login hook
  let {login}=UseLogin();

  // call function that fetch data from hook
  function handleLogin(e){
      e.preventDefault(); 
      login(nationalNumber,password);
  }
 
  return (
    <div className={style.Login}>
      <h2>  <WavingHandIcon style={{color:"#ef6c00"}}/>اهلا بك مرة اخرى  <WavingHandIcon style={{color:"#ef6c00"}}/></h2>
      <form >
        <div className={style.frominformation}>
          <h3>تسجيل دخول</h3>
          <img
            width={50}
            src="./380734428_324908939935661_8355368135205759861_n.jpg"
            alt=""
          />
        </div>

        <div className={style.register}>
          <input value={nationalNumber} onChange={(e)=>{setNationalNumber(e.target.value)}} type="text" placeholder="الرقم الوطني" required></input>

          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="كلمة المرور" required></input>

          <button onClick={handleLogin}>تسجيل الدخول</button>
          
          <p>لا تمتلك حساب؟ <Link to={"/register"} style={{color:"green"}}>انشاء حساب</Link></p>
        </div>
      </form>
    </div>
  );
}
