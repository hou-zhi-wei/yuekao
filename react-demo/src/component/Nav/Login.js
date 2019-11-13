import React, { Component } from 'react'
import requser from "../../until/request"
export default class Login extends Component {
    state={
        user:"",
        pwd:""
    }
    user=()=>{
        this.setState({
            user:this.refs.user.value
        })
    }
    pwd=()=>{
        this.setState({
            pwd:this.refs.pwd.value
        })
    }
    Deng=()=>{
        const {user,pwd}=this.state
        requser("/login.json",{user,pwd}).then((res)=>{
            console.log(res)
            if(res==="登陆成功"){
              this.props.history.push("/Home")
            }
        })
    }
    render() {
        console.log(this)
        return (
            <div>
                <input placeholder="请输入手机号" ref="user" onChange={this.user} type="text"></input><br/>
                <input placeholder="请输入验证码" ref="pwd" onChange={this.pwd} type="text"></input><br/>
                <button onClick={()=>this.Deng()}>登陆</button>
            </div>
        )
    }
}
