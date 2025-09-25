import style from "../style/register.module.css";
import WavingHandIcon from '@mui/icons-material/WavingHand';

export default function Register() {
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
          <input type="text" placeholder="الاسم كامل" required />
          <input type="text" placeholder="الرقم الوطني" required />
          <input type="text" placeholder=" العنوان" required />
          <input type="text" placeholder=" العمر" required />
          <textarea placeholder="اكتب ملخص مشاركاتك التطوعية"></textarea>
          <input type="password" placeholder="كلمة المرور" required />
          <button>انشاء حساب</button>
          <p>
            هل تمتلك حساب؟<span style={{ color: "green" }}> تسجيل دخول</span>
          </p>
        </div>
      </form>
    </div>
  );
}
