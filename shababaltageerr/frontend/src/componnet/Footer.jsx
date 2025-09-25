import { UseGoes } from "../context/Gocontext";
import style from "../style/Footer.module.css";
import CopyrightIcon from '@mui/icons-material/Copyright';
export default function Footer(){
    let whatsapp="https://wa.me/962791084778";
    let inastagram="https://www.instagram.com/shabab_altageer/";
    let telegram="t.me/+hg4huqIpWxdhOWM0";
    let {Contact}=UseGoes();
    return(
        <div ref={Contact} className={style.footer}>
            <div className={style.footerinformation}>
                  <strong>شباب التغيير</strong>
            <img width={50} src="./380734428_324908939935661_8355368135205759861_n.jpg"></img>
            </div>
            <div className={style.icon}>
                <a href={inastagram}><img   src="./Instagram-Logo.png"></img></a>
                 <a href={whatsapp}><img src="./whatsapp-logo-icon-isolated-on-transparent-background-free-png.webp"></img></a>
                 <a href={telegram}><img   src="./telegram_PNG12.png"></img></a>
            </div>
          {/* <p>جميع الحقوق محفوظة <CopyrightIcon/></p> */}
        </div>
    );
}