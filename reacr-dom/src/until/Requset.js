import mock from "../mock/mock"

function requset(url,obj){
    return new Promise(res=>{
        res(mock[url](obj))
    })
}

export default requset