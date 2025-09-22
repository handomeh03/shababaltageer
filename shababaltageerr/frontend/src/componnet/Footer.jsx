import style from "../style/Footer.module.css";

export default function Footer(){
    let whatsapp="https://wa.me/962782584258?text=مرحبا";
    return(
        <div className={style.footer}>
            <div className={style.footerinformation}>
                  <strong>شباب التغير</strong>
            <img width={50} src="./380734428_324908939935661_8355368135205759861_n.jpg"></img>
            </div>
            <div className={style.icon}>
                <a><img   src="./Instagram-Logo.png"></img></a>
                 <a href={whatsapp}><img src="./whatsapp-logo-icon-isolated-on-transparent-background-free-png.webp"></img></a>
                 <a><img  src="./facebook-logo-facebook-icon-transparent-free-png.webp"></img></a>
            </div>
        </div>
    );
}