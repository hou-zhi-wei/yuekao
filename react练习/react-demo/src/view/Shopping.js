import React, { Component } from 'react'
import {connect} from "react-redux"
import "../component/css/index.css"
export default class Shopping extends Component {
    render() {
        const {cart}=this.props
        console.log(cart)
        return (
            <div>
                <div className="box3">
                    全选<input type="checkbox" checked={cart.every(item=>item.checked)}  onChange={(e)=>this.props.checkedAll(e)}/>
                    {
                        cart.map((item,index)=>{
                            return <div key={index} className="box4">
                                <input type="checkbox" checked={item.checked} onChange={()=>this.props.checked(item)} />
                                <p><img src={item.dataimg}/></p>
                                <p>{item.datatitle}</p>
                                <p>{item.dataprice}</p>
                                <p className="jia" onClick={()=>this.props.ADD(item)}>+</p>
                                <p>{item.num}</p>
                                <p className="jia" onClick={()=>this.props.Remove(item)}>-</p>
                            </div>
                        })
                    }
                    <span>总价{this.getdata}</span>
                </div>
            </div>
        )
    }
    get getdata(){
        let price=this.props.cart.reduce((total,item)=>{
            if(item.checked){
                total+=item.num*item.dataprice
            }
            return total
        },0)
        return price
    }
}

let mapStateToProps=(store)=>{
    const {cart}=store
    console.log(cart)
    return {
        cart
    }
}
let mapDisPatchToProps=(dispatch)=>{
    return{
        ADD(item){
            dispatch({type:"ADD",cart:item})
        },
        Remove(item){
            dispatch({type:"Remove",cart:item})
        },
        checked(item){
            dispatch({type:"Checked",Quanxuan:item})
        },
        checkedAll(e){
            dispatch({type:"checkedAll",cart:e.target.checked})
        }
    }
}

Shopping=connect(mapStateToProps,mapDisPatchToProps)(Shopping)
