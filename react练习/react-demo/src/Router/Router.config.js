import React from "react"

import Main from "../view/Main"
import Shouye from "../view/Shouye"
import Shopping from "../view/Shopping"
export default {
    routes:[
        {
            path:"/",
            redirect:"/Main/Shouye"
        },
        {
            path:"/Main",
            component:Main,
            children:[
                {
                    path:"/Main/Shouye",
                    component:Shouye
                },
                {
                    path:"/Main/Classify",
                    component:()=><p>分类</p>
                },
                {
                    path:"/Main/Shopping",
                    component:Shopping
                },
                {
                    paht:"/Main/My",
                    component:()=><p>我的</p>
                }
            ]
        },
        
    ]
}