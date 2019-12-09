import Mock,{Random} from "mockjs"

let data=Mock.mock({
    "list|20":[{
        "dataimg":Random.image("200x100"),
        "id|+1":1,
        "datatitle":"@ctitle(8)",
        "dataprice|1-200":1
    }]
})

Mock.mock(("/api/list"),"get",()=>{
    return data
})