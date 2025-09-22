import { useState } from "react";
import style from "../style/Authority.module.css";
import SingleAuth from "./singleAuth";

export default function Authority(){
    let [author]=useState([
        {id:1,image:"./zaid.jpg",name:"زيد جوهر",title:"مسؤول العلاقات العامة",mainDescription:"يسعى دائما الى بناء علاقات قوية ودعم التطوع من الخارج",secoundryDescription:" منذ انضمامي الى هذا الفريق وانا اشعر بالفخر لكوني جزءا منكم واضمن ان جهودكم تقدر وتعزز لانني اؤمن بان كل واحد منكم لدديه شيء مميز يقدمه"},
         {id:2,image:"./mohammad.jpg",name:" محمد سلمان",title:"مدرب المتطوعين",mainDescription:"يحاول دائما اخراج افضل وظيفة لكل فرد بالفريق بالمكان الصحيح",secoundryDescription:"منذ بداياتي في شباب التغيير وانا اسعى لان اكون جزئا من التغيير ودعم كل فرد يسعى لايجاد نفسه بعمل الخير"},
          {id:3,image:"./omar.jpg",name:" عمر عودة",title:"مسؤول  النظام",mainDescription:"هو المسؤول عن انضباط النشاط وسيره ضمن قوانين وهو احد اساسات بناء كتلة صحية",secoundryDescription:"الهدف الاساسي للتطوع هو فعل الخير لوجه الله تعالى"},
          
    ]);
    return(
        <div className={style.containerAuthority}>
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