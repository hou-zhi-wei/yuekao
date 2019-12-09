import {createStore} from "redux"

let reducer=(state,action)=>{
    // console.log(action)
    // XX数组
    if(action.type==="ADD_List"){
        state.List=action.XuanList
    }
    //加数组
    if(action.type==="ADDLIST"){
        state.ADDLIST=action.ADD
    }
    if(action.type==="ADD_Up"){
        // console.log(state.ADDLIST[acti   on.index],action.index,"11111111111111")
        state.List.push(state.ADDLIST[action.index])
        state.ADDLIST.splice(action.index,1)
        return {...state,List:[...state.List],ADDLIST:[...state.ADDLIST]}
    }
    if(action.type==="Romove_up"){
        state.ADDLIST.push(state.List[action.index])
        state.List.splice(action.index,1)
        return{...state,ADDLIST:[...state.ADDLIST],List:[...state.List]}
    }
    
    return {...state}
}

let initstate={
    List:[],
    ADDLIST:[]
}
let store=createStore(reducer,initstate)

export default store