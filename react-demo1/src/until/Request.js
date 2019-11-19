import mock from "../mock/mock"

function Request(url,obj){
    return new Promise(res=>{
       res(mock[url](obj))
    })
}

export default Request