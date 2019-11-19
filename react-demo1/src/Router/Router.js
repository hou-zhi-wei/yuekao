import React, { Component } from 'react' 
import {BrowserRouter,Switch,Route,Link,Redirect} from "react-router-dom"
import "../component/css/index.css"
import Home from './Nav/Home';
import Yingyong from './Yingyong';
import Guanli from './Guanli';
export default class Router extends Component {
    render() {
        return (
        
              <BrowserRouter>
                    <Switch>
                        <Route path="/Home" component={Home}></Route>
                        <Route path="/Yingyong"component={Yingyong}></Route>
                        <Route path="/Guanli" component={Guanli}></Route>
                        <Redirect from="/" to="/Home"/>
                    </Switch>
              </BrowserRouter>
         
        )
    }
}
