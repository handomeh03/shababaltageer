import { createContext, useContext, useState } from "react";
const Authorcontext=createContext();
export default function AuthorProvider({children}){
     let [author]=useState([
              {id:1,image:"./zaid.jpg",name:"زيد جوهر",title:"مسؤول العلاقات العامة",mainDescription:"يسعى دائما الى بناء علاقات قوية ودعم التطوع من الخارج",secoundryDescription:" منذ انضمامي الى هذا الفريق وانا اشعر بالفخر لكوني جزءا منكم واضمن ان جهودكم تقدر وتعزز لانني اؤمن بان كل واحد منكم لدديه شيء مميز يقدمه"},
              {id:2,image:"./mohammad.jpg",name:" محمد سلمان",title:"مدرب المتطوعين",mainDescription:"يحاول دائما اخراج افضل وظيفة لكل فرد بالفريق بالمكان الصحيح",secoundryDescription:"منذ بداياتي في شباب التغيير وانا اسعى لان اكون جزئا من التغيير ودعم كل فرد يسعى لايجاد نفسه بعمل الخير"},
              {id:3,image:"./omar.jpg",name:" عمر عودة",title:"مسؤول  النظام",mainDescription:"هو المسؤول عن انضباط النشاط وسيره ضمن قوانين وهو احد اساسات بناء كتلة صحية",secoundryDescription:"الهدف الاساسي للتطوع هو فعل الخير لوجه الله تعالى"},
              {id:4,image:"./anoudd.png",name:"عنود عوايشة",title:"مسؤول  التخطيط",mainDescription:"وضع الخطط وتنظيم الفعاليات لضمان تحقيق اهداف الفريق بكفاءة عالية",secoundryDescription:"وجودي بفريق شباب التغيير منحني فرصة للنمو على المستوى الشخصي والمهني حيث تعلمت مهارات التخطيط والتنظيم والعمل الجماعي وتوسيع شبكة معارفي والتفاعل مع اشخاص يشاركونني نفس الشغف لخدمة المجتمع"},
              {id:5,image:"./maram.png",name:"مرام الشعار",title:"مشرفة المتطوعين",mainDescription:"دورها يتمحور حول الاشراف على انشطة الفريق والمتطوعين والتاكد من سير العمل بكفاءة",secoundryDescription:"وجودي بفريق شباب التغيير حيث اكتسبت مهارات القيادة والتنسيق والتواصل الفعال"},
              
        ]);
    return(
        <Authorcontext.Provider value={{author}}>
            {children}
        </Authorcontext.Provider>
    );
}
export function useAuthor(){
    let context=useContext(Authorcontext);
    if(!context){
        throw new Error("error");
    }
    return context;
}