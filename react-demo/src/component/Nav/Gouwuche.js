import React, { Component } from 'react'
import {connect} from "react-redux"
import "../css/index.css"
// 我是购物车
export default class Gouwuche extends Component {
    render() {
        const {gouwu}=this.props
        console.log(gouwu)
        return (
            <div>
                {
                    gouwu.map((item,key)=>{
                        return <div key={key}>
                           <dl>
                                <dt><img src={item.img}/></dt>
                                <dd>{item.title}</dd>
                                <dd>{item.moren}</dd>
                                <span onClick={()=>this.props.remove(item)}>-</span>
                                <span>{item.num}</span>
                                <span onClick={()=>this.props.add(item)}>+</span>
                                <span>{(item.num*1)*(item.jiage*1)}</span>
                            </dl>
                        </div>
                    })
                }
            </div>
        )
    }
}
let mapStateToProps=(store)=>{
    const {gouwu}=store
    console.log(gouwu)
    return {
        gouwu
    }
}
let mapDisPatchToProps=(dispatch)=>{
    return{
        add(item){
            console.log(item)
            dispatch({type:"AA",Jia:item})
        },
        remove(item){
            dispatch({type:"BB",Jian:item})
        }
    }
}
Gouwuche=connect(mapStateToProps,mapDisPatchToProps)(Gouwuche)