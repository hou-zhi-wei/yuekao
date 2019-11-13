import React, { Component } from 'react'
import Requset from "../until/Requset"
import "./css/index.css"
export default class Login extends Component {
    state={
        username:"",
        userpwd:""
    }
    username=()=>{
        this.setState({
            username:this.refs.username.value
        })
    }
    userpwd=()=>{
        this.setState({
            userpwd:this.refs.userpwd.value
        })
    }
   Deng=()=>{
       const {username,userpwd}=this.state
       Requset("/Login.json",{username,userpwd}).then((res)=>{
           console.log(res)
           if(res==="登录成功"){
               this.props.history.push("/Home")
               console.log(this)
           }
       })
   }
    render() {
        console.log(this)
        return (
            <div className="Denglu">
                <input placeholder="用户名" ref="username" type="text" onChange={this.username}></input><br/>
                <input placeholder="密码" ref="userpwd" type="password" onChange={this.userpwd}></input><br/>
                <button onClick={()=>this.Deng()}>登录</button>
            </div>
        )
    }
}
