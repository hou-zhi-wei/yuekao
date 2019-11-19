import React, { Component } from 'react'
import {connect} from "react-redux"
export default class Guanli extends Component {
    render() {
        const {List,ADDLIST}=this.props
        console.log(List,ADDLIST)
        return (
            <div>
                
                    <div className="box">
                        {
                             List.map((item,key)=>{
                                return <dl key={key}>
                                    <dt><img src={item.dataimg}/></dt>
                                    <dd>{item.datatitle}</dd>
                                    <dd onClick={()=>this.props.Remove(key)}>X</dd>
                                    <hr></hr>
                                </dl>
                            })
                        }
                     <div className="box">
                        {
                             ADDLIST.map((item,key)=>{
                                return <dl key={key}>
                                    <dt><img src={item.listimg}/></dt>
                                    <dd>{item.listtitle}</dd>
                                    <dd onClick={()=>{this.props.ADDClick(key)}}>+</dd>
                                    <hr></hr>
                                </dl>
                            })
                        }
                     </div>
                    </div>
            </div>
        )
    }
}
let mapStateToProps=(store)=>{
    console.log(store)    
    const {List,ADDLIST}=store
    console.log(List)
    return {
        List,
        ADDLIST
    }
}
let mapDisPatchToProps=(dispatch)=>{
    return {
        ADDClick(key){
            dispatch({type:"ADD_Up",index:key})
            // console.log(this)
        },
        Remove(key){
           dispatch({type:"Romove_up",index:key})
        }
    }
}
Guanli=connect(mapStateToProps,mapDisPatchToProps)(Guanli)
