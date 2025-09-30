import { Link, useNavigate } from "react-router-dom";
import { UseGoes } from "../context/Gocontext";
import style from "../style/HeaderMenu.module.css"
import { UseUser } from "../context/UserContext";
export default function HeaderMenu({flag}){
    let {Authority,Contact}=UseGoes();
    let {userDispatch,token}=UseUser();
    let navigate=useNavigate();

    function GoAuthority(){
        Authority.current.scrollIntoView({behavior:"smooth"});
    }
    function GoContact(){
         Contact.current.scrollIntoView({behavior:"smooth"});
    }
    return(
        <div className={style.HeaderMenu}>
             <div style={{display:flag?"block":"none"}} className={style.smallMenu}>
                <ul>
                    <Link to={"/"} className={style.link}>الصفحة الرئيسية</Link>
                    <Link to={"/events"} className={style.link}>التطوعات</Link>
                    <Link to={"/myEvent"} className={style.link}>مشاركاتي</Link>
                    {/* <Link to={"/"} className={style.link} onClick={GoAuthority}>الهيئة</Link> */}
                    <Link to={"/"} className={style.link}  onClick={GoContact}>التواصل</Link>

                    {token? "": <Link className={style.link} to={"/login"}>تسجيل الدخول</Link>}
                     {token?<li  onClick={()=>{
                           navigate("/login");
                           userDispatch({type:"logout"})
                           localStorage.removeItem("token");
                    }} className={style.link}>تسجيل الخروج</li>:""}
                </ul>
             </div>
             <div className={style.largeMenu}>
                 <ul>
                    <Link to={"/"} className={style.link}>الصفحة الرئيسية</Link>
                    <Link to={"/events"} className={style.link}>التطوعات</Link>
                    <Link to={"/myEvent"} className={style.link}>مشاركاتي</Link>
                    {/* <Link to={"/"} className={style.link} onClick={GoAuthority}>الهيئة</Link> */}
                    <Link to={"/"} className={style.link} onClick={GoContact}>التواصل</Link>
                   {token? "": <Link className={style.link} to={"/login"}>تسجيل الدخول</Link>}
                     {token?<li  onClick={()=>{
                           navigate("/login");
                           userDispatch({type:"token"})
                           localStorage.removeItem("token");
                    }} className={style.link}>تسجيل الخروج</li>:""}
                   
                </ul>
             </div>
        </div>
    );
}