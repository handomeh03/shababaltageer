import { Link } from "react-router-dom";
import style from "../style/register.module.css";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { useState } from "react";
import { UseRegister } from "../hooks/UseRegister";
import ErrorAlert from "../componnet/Alert";

export default function Register() {
  let [fullName,setFullname]=useState("");
  let[nationalNumber,setNationalNumber]=useState("");
  let[location,setLocation]=useState("");
  let [age,setAge]=useState("");
  let [description,setDescription]=useState("");
  let[phoneNumber,setPhoneNumber]=useState("");
  let [password,setPassword]=useState("");

  let {Register,registerError}=UseRegister();

  function handleRegister(e){
    e.preventDefault(); 
    Register(fullName,nationalNumber,location,Number(age),description,password,phoneNumber);
  }
  return (
    <div className={style.Register}>
      <h2>
        <WavingHandIcon style={{ color: "#ef6c00" }} />
        اهلا بك في فريق شباب التغيير
        <WavingHandIcon style={{ color: "#ef6c00" }} />
      </h2>
      <form>
        <div className={style.frominformation}>
          <h3>انشاء حساب جديد</h3>
          <img
            width={50}
            src="./380734428_324908939935661_8355368135205759861_n.jpg"
            alt=""
          />
        </div>

        <div className={style.registerform}>
          <input value={fullName} onChange={(e)=>{setFullname(e.target.value)}} type="text" placeholder="الاسم كامل" required />
          <input value={nationalNumber} onChange={(e)=>{setNationalNumber(e.target.value)}} type="text" placeholder="الرقم الوطني" required />
          <input value={location} onChange={(e)=>{setLocation(e.target.value)}} type="text" placeholder=" العنوان" required />
          <input value={age} onChange={(e)=>{setAge(e.target.value)}} type="text" placeholder=" العمر" required />
          <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="اكتب ملخص مشاركاتك التطوعية"></textarea>
          <input value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} type="text" placeholder=" رقم الهاتف" required />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="كلمة المرور" required />
          <button onClick={handleRegister}>انشاء حساب</button>
          <p>
            هل تمتلك حساب؟<Link to={"/login"} style={{ color: "green" }}> تسجيل دخول</Link>
          </p>
        </div>
      </form>
      {registerError && <ErrorAlert error={registerError}/>}
    </div>
  );
}
