import mockData from "./data.json"
import xuanrao from "./xuanrao.json"
let mock={
    "/login.json":function(obj){
        console.log(obj)
        let Denglu=mockData.some((item)=>{
            return item.user===obj.user && item.pwd===item.pwd
        }) 
        if(Denglu){
            return "登陆成功"
        }else{
            return "登陆失败"
        }     
    },
    "/xuan.json"(){
        return xuanrao
    }
}

export default mock