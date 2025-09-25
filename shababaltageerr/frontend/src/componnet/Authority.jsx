import style from "../style/Authority.module.css";
import SingleAuth from "./SingleAuth";
import { UseGoes } from "../context/Gocontext";
import { useAuthor } from "../context/AuthorContext";

export default function Authority(){
  // name of author from contextAPI
   let {author}=useAuthor();
   // to scroll to authority div using contextAPI
    let {Authority}=UseGoes();
    return(
        <div ref={Authority} className={style.containerAuthority}>
            <h1>الهيئة</h1>
         <div className={style.Authority}>
          {
            author.map((e)=>{
                return (
                    <SingleAuth key={e.id} author={e}/>
                );
            })
          }
        </div>
        </div>
    );
}