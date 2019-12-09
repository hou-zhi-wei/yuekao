import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from "axios"
export default class Shouye extends Component {
    render() {
        const {list}=this.props
        console.log(list)
        return (
            <div>
                <div className="box">
                    {
                        list.map((item,index)=>{
                            return <dl key={index}>
                                <dt><img src={item.dataimg}/></dt>
                                <dd>{item.datatitle}</dd>
                                <dd>{item.dataprice}<span className="jia" onClick={(e)=>this.props.AddClick(e,item)}>+</span></dd>
                            </dl>
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
    const {list}=store
    console.log(list)
    return {
        list
    }
}
let mapDisPatchToProps=(dispatch)=>{
    return {
        getdata(){
            axios.get("/api/list").then((res)=>{
                console.log(res.data.list)
                dispatch({type:"ListDAta",List:res.data.list})
            })
        },
        AddClick(e,item){
            e.stopPropagation();
            dispatch({type:"List_Data",Shopping:item})
        }
    }
}

Shouye=connect(mapStateToProps,mapDisPatchToProps)(Shouye)
