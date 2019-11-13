import {createStore} from "redux"


let reduect=(state,action)=>{
    console.log(action)
    if(action.type==="ADD_LIST"){
        state.XiangList=action.TabList
    }
    if(action.type==="GouWu"){
        state.gouwu.push(action.gg)
    }
    if(action.type==="AA"){
        ++action.Jia.num
        return{...state,gouwu:[action.Jia]}
    }
    if(action.type=="BB"){
        if(action.Jian.num<=0){
            alert("别点了")
        }else{
            --action.Jian.num
            return{...state,gouwu:[action.Jian]}
        }
       
    }
    return{...state}
}
let initstate={
    XiangList:[],
    gouwu:[]
}
let store=createStore(reduect,initstate)

export default store