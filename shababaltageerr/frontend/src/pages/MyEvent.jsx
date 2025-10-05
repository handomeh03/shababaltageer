import Header from "../componnet/Header";
import Loader from "../componnet/Loader";
import SingleMyevent from "../componnet/SingleMyevent";
import { UseEvent } from "../context/EventContext";
import { UseUser } from "../context/UserContext";
import { useFetchMyevent } from "../hooks/useFetchMyEvent";
import style from "../style/Myevent.module.css"
export default function MyEvent(){
    let{user}=UseUser();
    let {loader}=useFetchMyevent();
    let{myevent}=UseEvent();

    if(loader){
      return <Loader/>
    }
    
    return(
        <div className={style.MyEvent}>
              <Header/>

              {
                myevent.length==0? 
                        <p style={{textAlign:"center",fontFamily:"Tajawal",background:"#ef6c00",color:"white",borderRadius:"1rem",padding:"1rem",width:"50%",margin:"5rem auto" }}>لا يوجد تطوعات خاصة بك</p>:
                         <div className={style.userEvent}>
                     <div className={style.userEventInformation}>
                             <p> اسم المتطوع : {user?.full_name}</p>
                             <p>الرقم الوطني : {user?.phonenumber}</p>
                             <p style={{marginTop:"1rem"}}>مشاركاتي : </p>
                </div>
                     <div className={style.tables}>
                        <table >
                        <thead>
                          <tr>
                            <th>اسم التطوع</th>
                            <th>العنوان</th>
                          </tr>
                        </thead>
                       <tbody>
                          {
                            myevent?.map((e,index)=>{
                              return(
                                <SingleMyevent key={index} event={e}/>
                              );
                            })
                          }
                         
                        </tbody>
                      </table>
                      
                      </div>
                       
              </div>
                       
              }
             
        </div>
    );
}