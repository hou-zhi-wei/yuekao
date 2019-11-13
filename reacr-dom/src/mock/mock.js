import mockData from "./data.json"
import listData from "./xuanrao.js"
let mock=({
    "/Login.json":function(obj){
        console.log(obj)
       let Denglu=mockData.some(item=>{
           return item.username===obj.username &&item.userpwd===obj.userpwd
       })
       if(Denglu){
           return "登录成功"
       }else{
           return "登录失败"
       }
    },
    "/list.json":function(){
        return listData
    }
    
})
export default mock