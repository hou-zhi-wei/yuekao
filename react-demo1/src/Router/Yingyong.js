import React, { Component } from 'react'
import Request from "../until/Request"
import {connect} from "react-redux"
export default class Yingyong extends Component {
    addClick=()=>{
        this.props.history.push("/Guanli")
    }
    render() {
         const {ADDLIST}=this.props
         console.log(ADDLIST)
        return (
            <div>
                <h1>我的应用</h1>
                <button className="btn" onClick={()=>this.addClick()}>+添加</button>
                <h2>更多应用</h2>
                <div className="box">
                    {
                        ADDLIST.map((item,key)=>{
                            return  <dl key={key}>
                            <dt><img src={item.listimg} alt="" /></dt>
                            <dd>{item.listtitle}</dd>
                        </dl>
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
      this.props.ADDdata()
    }
}

let mapStateToPorps=(store)=>{
    const {ADDLIST}=store
    console.log(ADDLIST)
    return {
        ADDLIST
    }
}

let mapDisPatchToProps=(dispatch)=>{
    return {
      ADDdata(){
        Request("/list/json").then((res)=>{
            console.log(res)
            dispatch({type:"ADDLIST",ADD:res,index:0})
        })
      }
    }
}

Yingyong=connect(mapStateToPorps,mapDisPatchToProps)(Yingyong)
