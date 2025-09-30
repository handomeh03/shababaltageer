
import { UseUser } from "../context/UserContext";
import { useFetchuser } from "../hooks/useFetchuser";
import style from "../style/Headerinformation.module.css";
import MenuIcon from '@mui/icons-material/Menu';
export default function Headerinformation({handleChangeflag,flag}) {
  useFetchuser();
  let {user}=UseUser();
  return (
    <div className={style.Headerinformation}>
      <div className={style.info}>
        <img
        width={100}
        src="/380734428_324908939935661_8355368135205759861_n.jpg"
      ></img>
      <h3>{user?.full_name || "شباب التغيير"}</h3>
      </div>
     <div className={style.headerBtn} onClick={()=>{handleChangeflag(!flag)}}>
       <MenuIcon/>
     </div>
    </div>
  );
}
