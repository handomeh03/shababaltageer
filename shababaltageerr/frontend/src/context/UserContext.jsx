import { createContext, useContext, useReducer } from "react";
const UserContext=createContext();
export default function UserProvider({children}){

    function reduse(state,action){
        switch(action.type){
            case "token":
                return {...state,token:action.payload}; 
            case "logout":
                return {...state,token:null,user:null};  
             case "fetchuser":
                return {...state,user:action.payload}     
            default :
              return state ;   
        }
    }

    let [state,userDispatch]=useReducer(reduse,{token:JSON.parse(localStorage.getItem("token")),user:null});
    return(
        <UserContext.Provider value={{...state,userDispatch}}>
            {children}
        </UserContext.Provider>
    );
}
export function UseUser(){
    let context=useContext(UserContext);
    if(!context){
        throw new Error("error");
    }
    return context;
}