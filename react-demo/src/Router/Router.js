import React, { Component } from 'react'

//  路由 页面
import {BrowserRouter,Switch,Link,Route,Redirect} from "react-router-dom"
import Home from '../component/Nav/Home';
import "../component/css/index.css"
import Classify from '../component/Nav/Classify';
import Dingdan from '../component/Nav/Dingdan';
import Gouwuche from '../component/Nav/Gouwuche';
import My from '../component/Nav/My';
import Login from '../component/Nav/Login';
import XiangXiang from '../component/Nav/XiangXiang';
export default class Router extends Component {
    render() {
        return (
            <div className="box">
                <BrowserRouter>
                <div className="header">

                </div>
                    <div className="main">
                        <Switch>
                            <Route path="/Home" component={Home}></Route>
                            <Route path="/Classify" component={Classify}></Route>
                            <Route path="/Dingdan" component={Dingdan}></Route>
                            <Route path="/Gouwuche" component={Gouwuche}></Route>
                            <Route path="/My" component={My}></Route>
                            <Route path="/Login" component={Login}></Route>
                            <Route path="/XiangXiang" component={XiangXiang}></Route>
                            <Redirect from="/" to="Login"/>
                        </Switch>
                    </div>
                    <div className="footer">
                        <Link to="/Home">首页</Link>
                        <Link to="/Classify">菜单</Link>
                        <Link to="/Dingdan">订单</Link>
                        <Link to="/Gouwuche">购物车</Link>
                        <Link to="/My">我的</Link>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
