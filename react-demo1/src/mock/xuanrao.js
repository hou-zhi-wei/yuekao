import Mock,{Random} from "mockjs"

let data=Mock.mock({
    "data|9":[{
        "dataimg":Random.image("200x100"),
        "datatitle":("@ctitle(7)")
    }]
})

export default data
