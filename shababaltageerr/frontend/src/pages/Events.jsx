import { useState } from "react";
import AddEventDilaog from "../componnet/addEventDialog";
import Header from "../componnet/Header";
import Loader from "../componnet/Loader";
import SingleEvent from "../componnet/SingleEvent";
import { UseEvent } from "../context/EventContext";
import { UseUser } from "../context/UserContext";
import { useFetchEvent } from "../hooks/useFetchEvent";
import style from "../style/Events.module.css"

export default function Events(){
    let[flag,setflag]=useState(false);
    let[image]=useState("./group.jpg");
     let[name,setName]=useState("");
     let[description,setDescription]=useState("");
     let[location,setLocation]=useState("");
     let[numberOfMember,setNumberOfMember]=useState("");
     let[price,setPrice]=useState("");
     let[status,setStatus]=useState("");

     function handlechangeFlag(){
        setflag((old)=>!old);
     }
     function handleChangename(name){
        setName(name);
     }
     function handlechangedescription(description){
        setDescription(description);
     }
     function handlechangeLocation(location){
        setLocation(location);
     }
     function handlechangeNumberOfmember(numberOfMember){
        setNumberOfMember(numberOfMember);
     }
     function handleChangePrice(price){
        setPrice(price);
     }

     function handlechangestatus(status){
        setStatus(status);
     }


    let{lodaer}= useFetchEvent();
    let {event}=UseEvent();
    let {user}=UseUser();

    if(lodaer){
        return (<Loader/>);
    } 
    return(
        <div className={style.Eventscontainter}>
            

             <div className={style.Events}>

                {user?.role=="admin"? <button onClick={handlechangeFlag} className={style.addeventbtn}> اضافة تطوع</button>:""}
                <div className={style.listOfEvent}>

                     {event.length>0?event.map((e)=>{
                        return(
                            <SingleEvent key={e.event_id} event={e}/>
                        );
                     }):<p style={{textAlign:"center",fontFamily:"Tajawal",marginTop:" 3rem",background:"#ef6c00",color:"white",borderRadius:"1rem",padding:"2rem" }}>لا يوجد تطوعات</p>}

                </div>

             </div>

             <AddEventDilaog flag={flag} image={image} name={name} description={description} location={location} numberOfMember={numberOfMember} price={price} status={status} handlechangeFlag={handlechangeFlag} handleChangename={handleChangename} handlechangedescription={handlechangedescription} handlechangeLocation={handlechangeLocation} handlechangeNumberOfmember={handlechangeNumberOfmember} handleChangePrice={handleChangePrice} handlechangestatus={handlechangestatus}/>
            
        </div>
    );
}