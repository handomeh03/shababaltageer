import { createContext, useContext, useReducer } from "react";
const VolunterContext=createContext();

export default function VolunterProvider({children}){

    function reduce(state,action){
        switch(action.type){
            case "fetchvolunter":
                return {...state,volunter:action.payload};
            default :
            return state;    
        }
    }

    let [state,volunterDispatch]=useReducer(reduce,{volunter:[]})
    return(
        <VolunterContext.Provider value={{...state,volunterDispatch}}>
            {children}
        </VolunterContext.Provider>
    );
}
export function useVolunter(){
    let context=useContext(VolunterContext);
    if(!context){
        throw new Error("error");
    }
    return context;
}