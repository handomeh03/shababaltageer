import style from "../style/Login.module.css";
import WavingHandIcon from '@mui/icons-material/WavingHand';
export default function Login() {
  return (
    <div className={style.Login}>
      <h2>  <WavingHandIcon style={{color:"orange"}}/>اهلا بك مرة اخرى  <WavingHandIcon style={{color:"orange"}}/></h2>
      <form>
        <div className={style.frominformation}>
          <h3>تسجيل دخول</h3>
          <img
            width={50}
            src="./380734428_324908939935661_8355368135205759861_n.jpg"
            alt=""
          />
        </div>

        <div className={style.register}>
          <input type="text" placeholder="الرقم الوطني" required></input>

          <input type="password" placeholder="كلمة المرور" required></input>

          <button>تسجيل الدخول</button>

          <p>لا تمتلك حساب؟ <span style={{color:"green"}}>انشاء حساب</span></p>
        </div>
      </form>
    </div>
  );
}
