import React, { Component } from 'react'
// 首页
import {connect} from "react-redux"
import requser from "../../until/request"
import "../css/index.css"
export default class Home extends Component {
    // 切换数据
    state={
        list:[
            {name:"大师咖啡"},
            {name:"零度拿铁"},
            {name:"瑞纳冰"},
            {name:"经典饮品"},
            {name:"健康轻食"},
            {name:"鲜果蔬菜汁"}
        ],
        isNow:0,
    }
    // Tab 切换
    Tab=(key)=>{
        this.setState({
            isNow:key
        })
    }
    // 详情
    xiang=(item)=>{
        this.props.history.push("/XiangXiang",item)
    }
    render() {
        const {list,isNow}=this.state
        const {XiangList}=this.props
        console.log(XiangList)
        return (
            <div className="bos">
                   <div className="left">
                        {
                            list.map((item,key)=>{
                                return <p key={key} className={[isNow===key?"active":" "].join(" ")} onClick={()=>this.Tab(key)}>
                                    {item.name}
                                </p>
                            })
                        }
                   </div>
                   <div className="right">
                        {
                            XiangList.map((item,key)=>{
                                return <div key={key} onClick={()=>this.xiang(item)}>
                                    <dl>
                                        <dt><img src={item.img}/></dt>
                                        <dd>{item.title}</dd>
                                        <dd>{item.moren}</dd>
                                        <button onClick={()=>this.props.gouwuche(item)}>加入购物车</button>
                                    </dl>
                                </div>
                            })
                        }
                   </div>
            </div>
        )
    }
    componentDidMount(){ 
        this.props.getdata()
    }
}

let mapStateToProps=(store)=>{
    const {XiangList}=store
    console.log(XiangList)
    return {
        XiangList
    }
}

let mapDisPatchToProps=(dispatch)=>{
    return {
        getdata(){
            requser("/xuan.json").then((res)=>{
                dispatch({type:"ADD_LIST",TabList:res})
            })
        },
        gouwuche(list){
            console.log(this)
            dispatch({type:"GouWu",gg:list})
        }
    }
}
Home=connect(mapStateToProps,mapDisPatchToProps)(Home)