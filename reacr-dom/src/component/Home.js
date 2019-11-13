import React, { Component } from 'react'
import "./css/index.css"
import Requset from "../until/Requset"
export default class Home extends Component {
  state={
      listData:[]
  }

    componentDidMount(){
        Requset("/list.json").then((res)=>{
            this.setState({
                listData:res.List
            })
        })
    }
    render() {
        const {listData}=this.state
        console.log(listData)
        return (
            <div>
                 <div className="header">
                    <h2>北京中志晟世文化传媒有限公司</h2>
                 </div>
                <div>
                    {
                       listData.map((item,index)=>{
                           return <div key={index}>
                            <p>{item.datatitle}</p>
                            <img src={item.dataimg} alt="" />
                              
                           </div>
                       })
                    }
                </div>
            </div>
        )
    }
}
