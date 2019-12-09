import React, { Component } from 'react'

import Routerview from "../Router/Routerview"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import "../component/css/index.css"
export default class Main extends Component {
    render() {
        return (
            <div className="warp">
                <div className="header">
             
                
                </div>
                <div className="main">
                     <Routerview routes={this.props.routes}></Routerview>
                </div>
                <div className="footer">
                     <Link to="/Main/Shouye">首页</Link>
                     <Link to="/Main/Classify">分类</Link>
                     <Link to="/Main/Shopping">购物车<span>{this.props.num}</span></Link>
                     <Link to="/Main/My">我的</Link>

                </div>
            </div>
        )
    }
}
let mapStateToProps=(store)=>{
    const {cart}=store
    console.log(cart)
    return {
        num:cart.reduce((total,item)=>total+=item.num,0)
    }
}

Main=connect(mapStateToProps)(Main)
