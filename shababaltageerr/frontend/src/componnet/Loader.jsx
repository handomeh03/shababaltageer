import style from "../style/Loader.module.css";
export default function Loader(){
    return(
          <div className={style.loading} style={{display:"flex",alignItems:"center",justifyContent:"center",height:"calc(100vh - 60px)"}}>
                <div className={style.load}></div>
            </div>
    );
}