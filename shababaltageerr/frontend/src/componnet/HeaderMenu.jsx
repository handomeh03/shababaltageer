import style from "../style/HeaderMenu.module.css"
export default function HeaderMenu({flag}){
    return(
        <div className={style.HeaderMenu}>
             <div style={{display:flag?"block":"none"}} className={style.smallMenu}>
                <ul>
                    <li>الصفحة الرئيسية</li>
                    <li>التطوعات</li>
                    <li>الهيئة</li>
                </ul>
             </div>
             <div className={style.largeMenu}>
                 <ul>
                    <li>الصفحة الرئيسية</li>
                    <li>التطوعات</li>
                    <li>الهيئة</li>
                    <li>التواصل</li>
                   
                </ul>
             </div>
        </div>
    );
}