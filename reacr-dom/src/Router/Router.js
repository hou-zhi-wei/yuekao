import React, { Component } from 'react'
import {BrowserRouter,Switch,Link,Route,Redirect} from "react-router-dom"
import Home from "../component/Home"
import Classify from "../component/Classify"
import Gouwuche from "../component/Gouwuche"
import My from "../component/My"
import Login from "../component/Login"
import "../component/css/index.css"
export default class Router extends Component {
    render() {
        return (
            <div className="wrap">
                <BrowserRouter>
               
                <div className="main">
                   <Switch>
                        <Route path="/Home" component={Home}></Route>
                        <Route path="/Classify" component={Classify}></Route>
                        <Route path="/Gouwuche" component={Gouwuche}></Route>
                        <Route path="/My" component={My}></Route>
                        <Route path="/Login" component={Login}></Route>
                        <Redirect from="/" to="/Login"/>
                   </Switch>
                </div>   
                <div className="footer">
                     <Link to="/Home">首页</Link>   
                     <Link to="/Classify">分类</Link>     
                     <Link to="/Gouwuche">购物车</Link>     
                     <Link to="/My">我的</Link>     
                </div>
                
                </BrowserRouter>
            </div>
        )
    }
}
