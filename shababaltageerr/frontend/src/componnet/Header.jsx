import { useState } from "react";
import style from "../style/Header.module.css"
import Headerinformation from "./Headerinformation";
import HeaderMenu from "./HeaderMenu";

export default function Header(){
     let [flag,setFlag]=useState(false);
     
     function handleChangeflag(flag){
        setFlag(flag);
     }
    return(
        <div className={style.Header}>
           <Headerinformation flag={flag} handleChangeflag={handleChangeflag}/>
           <HeaderMenu flag={flag} />
        </div>
    );
}