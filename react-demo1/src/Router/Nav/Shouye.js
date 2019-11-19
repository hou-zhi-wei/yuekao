import React, { Component } from 'react'
import Request from "../../until/Request"
import {connect} from "react-redux"
export default class Shouye extends Component {
    YingClick=()=>{
        this.props.history.push("/Yingyong")
    }
    componentDidMount(){
        this.props.getdata()
    }
    render() {
        const {List}=this.props
        console.log(this.props)
        return ( 
            <div>   
                <div className="box">
                    {
                        //  console.log(List)
                        List.map((item,key)=>{
                            return <dl key={key}>
                                <dt><img src={item.dataimg}/></dt>
                                <dd>{item.datatitle}</dd>
                            </dl>
                        })
                    }
                    <div>
                        <button onClick={()=>this.YingClick()}>更多</button>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps=(store)=>{
    
    const {List}=store
    console.log(List)
    return{
       List
    }
}
let mapDisPatchToProps=(dispatch)=>{
    return{
        getdata(){
            Request("/api/list").then((res)=>{
              dispatch({type:"ADD_List",XuanList:res.data})
            })
        }
    }
}

Shouye=connect(mapStateToProps,mapDisPatchToProps)(Shouye)