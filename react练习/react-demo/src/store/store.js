import {createStore} from "redux"

let reducer=(state,action)=>{
    console.log(action)
    state=JSON.parse(JSON.stringify(state))
    if(action.type==="ListDAta"){
        state.list=action.List
    }
    if(action.type==="List_Data"){
        let index=state.cart.findIndex(item=>item.id==action.Shopping.id)
        if(index==-1){
            action.Shopping.num=1;
            action.Shopping.checked=true
            state.cart.push(action.Shopping)
        }else{
            state.cart[index].num++
        }
    }
    if(action.type==="ADD"){
        let index=state.cart.findIndex(item=>item.id==action.cart.id)
        state.cart[index].num++;
    }
    if(action.type==="Remove"){
        let index=state.cart.findIndex(item=>item.id==action.cart.id)
        if(state.cart[index].num<=1){
            alert("确定删除吗")
            state.cart.splice(action.cart,1)
        }else{
            state.cart[index].num--;
        }
    }
    if(action.type==="Checked"){
        let index=state.cart.findIndex(item=>item.id==action.Quanxuan.id)
        console.log(index)
        state.cart[index].checked=!state.cart[index].checked
    }
    if(action.type==="checkedAll"){
        state.cart.forEach(item=>{
            console.log(item.checked=action.cart)
            item.checked=action.cart
        })
    }
    return state
}

let initStarte={
    list:[],
    cart:[]
}
let store=createStore(reducer,initStarte)


export default store