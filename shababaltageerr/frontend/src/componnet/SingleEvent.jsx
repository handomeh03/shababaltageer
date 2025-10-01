import style from "../style/singleEvent.module.css";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { UseUser } from "../context/UserContext";
import { useDeleteEvent } from "../hooks/useDeleteEvent";
import EditEventDialog from "./EditEventDialog";
import { useNavigate } from "react-router-dom";
import AddrecepitDialog from "./AddrecepitDialog";

export default function SingleEvent({handlechangeErrorReceipt,handlechangeAlreadyinFlag,handlechangeAlertFlag,event}) {
    let[flag,setflag]=useState(false);
    let[flag2,setflag2]=useState(false);
    let[image]=useState("./group.jpg");
     let[name,setName]=useState(event.name);
     let[description,setDescription]=useState(event.description);
     let[location,setLocation]=useState(event.location);
     let[numberOfMember,setNumberOfMember]=useState(event.number_of_members);
     let[price,setPrice]=useState(event.price);
     let[status,setStatus]=useState(event.status);

     let navigate=useNavigate();

     function handlechangeFlag(){
        setflag((old)=>!old);
     }
     function handlechangeflag2(){
      setflag2((old)=>!old);
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

  


   let {user}=UseUser();
   let {delteEvent}=useDeleteEvent();

    useEffect(() => {
        AOS.init({ duration: 600, once: true });
      }, []);


      function handledelteEvent(e){
        e.preventDefault(); 
        delteEvent(event.event_id);
      }
      function handleChangeFlag(){
        setflag((old)=>!old);
      }
  return (
    <div 
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="100"  className={style.singleEvent}>
      {
        user?.role=="admin"?<div className={style.crudsIcon}>
        <IconButton onClick={handledelteEvent} style={{color:"red"}} aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={handleChangeFlag} style={{color:"green"}} aria-label="edit">
          <EditIcon />
        </IconButton>

      </div>:""
      }

      <div className={style.eventInfo}>
        <img width={150} src="./group.jpg"></img>
        <h2>{event.name}</h2>
        <p style={{textAlign:"center"}}>{event.description}</p>
        <div className={style.singleeventFooter}>
            <span> الموقع: {event.location}   </span>
            <span> سهم المتطوع : {event.price} {event.price > 10 ?"دينار":"دنانير" }</span>
            <span>عدد المتطوعين المطلوبين : {event.number_of_members} </span>        
        </div>
       <div className={style.eventBtn}>
         {event.status=="active"?<button onClick={()=>{handlechangeflag2()}}>تسجيل</button>:event.status=="cancelled"?<span  style={{color:"white",background:"red",padding:"0.5rem",marginTop:"12px",borderRadius:"1rem"}} > انتهى التطوع</span>:<span  style={{color:"white",background:"red",padding:"0.5rem",marginTop:"12px",borderRadius:"1rem"}} >اكتمل العدد</span>}
         {
          user?.role=="admin"?<button onClick={()=>{navigate(`/events/${event.event_id}/Volunters`)}}>المتطووعين</button>:""
         }
       </div>
      </div>
      <EditEventDialog flag={flag} image={image} name={name} description={description} location={location} numberOfMember={numberOfMember} price={price} status={status} event_id={event.event_id} handlechangeFlag={handlechangeFlag} handleChangename={handleChangename} handlechangedescription={handlechangedescription} handlechangeLocation={handlechangeLocation} handlechangeNumberOfmember={handlechangeNumberOfmember} handleChangePrice={handleChangePrice} handlechangestatus={handlechangestatus}/>
      <AddrecepitDialog handlechangeErrorReceipt={handlechangeErrorReceipt} handlechangeAlreadyinFlag={handlechangeAlreadyinFlag} handlechangeAlertFlag={handlechangeAlertFlag} flag2={flag2} handlechangeflag2={handlechangeflag2} event_id={event.event_id} />
      
    </div>
  );
}
