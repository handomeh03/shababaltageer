import { createContext, useContext, useRef } from "react";
export  const Cont=createContext();
export default function Go({children}){
    let Authority=useRef(); 
    let Contact=useRef();
    return (
        <Cont.Provider value={{Authority,Contact}}>
            {children}
        </Cont.Provider>
    );

}
export function UseGoes(){
    let context=useContext(Cont)
    if(!context){
        throw new Error("error")
    }
    return context;
}