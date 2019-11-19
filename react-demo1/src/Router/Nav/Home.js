
import React, { Component } from 'react'
import {BrowserRouter,Switch,Route,Link,Redirect} from "react-router-dom"
import Shouye from './Shouye';
import Classify from './Classify';
import Shopping from './Shopping';
import My from './My';
export default class Home extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="header">

                </div>
                <div className="main">
                        <Switch>
                                <Route path="/Home/Shouye" component={Shouye}></Route>
                                <Route path="/Home/Classify" component={Classify}></Route>
                                <Route path="/HOme/Shopping" component={Shopping}></Route>
                                <Route path="/home/My" component={My}></Route>
                        </Switch>
                </div>
                <div className="footer">
                    <Link to="/Home/Shouye">首页</Link>
                     <Link to="/Home/Classify">分类</Link>
                     <Link to="/Home/Shopping">购物车</Link>
                     <Link to="/Home/My">我的</Link>
                </div>
            </div>

        )
    }
}

