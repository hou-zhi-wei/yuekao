import mock from "../mock/mock"

function request(url,obj){
    return new Promise((res)=>{
        res(mock[url](obj))
    })
}
export default  request