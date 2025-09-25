import { Link } from "react-router-dom";
import { UseGoes } from "../context/Gocontext";
import style from "../style/HeaderMenu.module.css"
export default function HeaderMenu({flag}){
    let {Authority,Contact}=UseGoes();
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
                    <li className={style.link}>الصفحة الرئيسية</li>
                    <li className={style.link}>التطوعات</li>
                    <li className={style.link} onClick={GoAuthority}>الهيئة</li>
                    <li className={style.link}  onClick={GoContact}>التواصل</li>
                    <Link className={style.link} to={"/login"}>تسجيل الدخول</Link>
                    {/* <li className={style.link}>تسجيل الخروج</li> */}
                </ul>
             </div>
             <div className={style.largeMenu}>
                 <ul>
                    <li className={style.link}>الصفحة الرئيسية</li>
                    <li className={style.link}>التطوعات</li>
                    <li className={style.link} onClick={GoAuthority}>الهيئة</li>
                    <li className={style.link} onClick={GoContact}>التواصل</li>
                   <Link className={style.link} to={"/login"}>تسجيل الدخول</Link>
                    {/* <li className={style.link}>تسجيل الخروج</li> */}
                   
                </ul>
             </div>
        </div>
    );
}