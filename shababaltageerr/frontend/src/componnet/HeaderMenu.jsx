import { UseGoes } from "../context/Gocontext";
import style from "../style/HeaderMenu.module.css"
export default function HeaderMenu({flag}){
    let {Authority}=UseGoes();
    function GoAuthority(){
        Authority.current.scrollIntoView({behavior:"smooth"});
    }
    return(
        <div className={style.HeaderMenu}>
             <div style={{display:flag?"block":"none"}} className={style.smallMenu}>
                <ul>
                    <li>الصفحة الرئيسية</li>
                    <li>التطوعات</li>
                    <li onClick={GoAuthority}>الهيئة</li>
                    <li>التواصل</li>
                    <li>تسجيل الدخول</li>
                    <li>تسجيل الخروج</li>
                </ul>
             </div>
             <div className={style.largeMenu}>
                 <ul>
                    <li>الصفحة الرئيسية</li>
                    <li>التطوعات</li>
                    <li onClick={GoAuthority}>الهيئة</li>
                    <li>التواصل</li>
                    <li>تسجيل الدخول</li>
                    <li>تسجيل الخروج</li>
                   
                </ul>
             </div>
        </div>
    );
}