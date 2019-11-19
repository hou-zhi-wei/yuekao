import mockData from "./data.json"
import xuanrao from "./xuanrao"

let mock={
    "/list/json"(){
        return mockData
    },
    "/api/list"(){
        return xuanrao
    }
}


export default mock

