import { useParams } from "react-router-dom";
import style from "../style/Volunters.module.css";
import { UseEvent } from "../context/EventContext";
import { useFetchVolunter } from "../hooks/useFetchVolunter";
import { useVolunter } from "../context/Volunter";
import Volunterr from "../componnet/Volunterr";
import Loader from "../componnet/Loader";
import { useFetchEvent } from "../hooks/useFetchEvent";
export default function Volunters() {
  let { eventId } = useParams();

  useFetchEvent();
  let { event } = UseEvent();

  let singleEvent = event.find((e) => {
    return e.event_id == Number(eventId);
  });

  
  let{loader}=useFetchVolunter(Number(eventId));
  let {volunter}=useVolunter();


  if(loader){
    return (
      <Loader/>
    );
  }
  
  return (
    <div className={style.Volunters}>
      <div className={style.eventInformation}>
        <p>اسم التطوع : {singleEvent?.name}</p>
        <p>عنوان التطوع: {singleEvent?.location}</p>
        <p style={{marginTop:"1rem"}}>المتطوعين : </p>
      </div>
      <div className={style.tables}>
        <table >
        <thead>
          <tr>
            <th>الاسم</th>
            <th>الرقم الوطني</th>
            <th>العنوان</th>
            <th>العمر</th>
            <th>رقم الهاتف</th>
            <th>صورة الوصل</th>
            
          </tr>
        </thead>
       {
        volunter.length==0?"" :  <tbody>
          {
            volunter?.map((e,index)=>{
              return(
                <Volunterr volunter={e}  key={index}/>
              );
            })
          }
         
        </tbody>
       }
      </table>
      
      </div>
       {
        volunter.length==0?<p style={{textAlign:"center",fontFamily:"Tajawal",marginTop:" 3rem",background:"#ef6c00",color:"white",borderRadius:"1rem",padding:"1rem",width:"50%",margin:"auto" }}>لا يوجد متطوعين</p>:""
       }
    </div>
  );
}

