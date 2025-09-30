import { createContext, useContext, useReducer } from "react";
const EventContext=createContext();

export default function EventProvider({children}){

    function reduse(state,action){
        switch (action.type){
            case "fetchEvent":
                return {...state,event:action.payload};

            case "deleteEvent":
                return{...state,event:state.event.filter((e)=>{
                    return e.event_id != action.payload.event_id;
                })}  ;
             case "addEvent":
                return { ...state,event: [ action.payload,...state.event] }; 
             case "editEvent":
                return {...state,event:state.event.map((e)=>{
                    if(e.event_id == action.payload.event_id){
                        return action.payload;
                    }
                    else{
                        return e;
                    }
                })};

                case "fetchMyevent":
                    return {...state,myevent:action.payload}
                
                
            default :
              return state;    
        }
    }


    let [state,eventDispatch]=useReducer(reduse,{event:[],myevent:[]});
    return(
        <EventContext.Provider value={{...state,eventDispatch}}>
            {children}
        </EventContext.Provider>
    );
}

export function UseEvent(){
    let context=useContext(EventContext);
    if(!context){
        throw new Error("error");
    }
    return context;
}