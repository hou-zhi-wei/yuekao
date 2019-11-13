import React, { Component } from 'react'
import {connect} from "react-redux"
export default class XiangXiang extends Component {
    state={
        list:this.props.location.state
    }
    render() {
        const {list}=this.state
        console.log(list)
        return (
            <div>
                <dl>
                     <dt><img src={list.img}/></dt>
                     <dd>{list.title}</dd>
                     <dd>{list.moren}</dd>
                     {/* <button onClick={()=>this.props.gouwuche(item)}>加入购物车</button> */}
                 </dl>

            </div>
        )
    }
    // componentDidMount(){ 
    //     this.props.getdata()
    // }
}
// let  mapStateToProps=(store)=>{
//         const {XiangList}=store
//         console.log(XiangList)
//         return {
//             XiangList
//         }
// }

// let mapDisPatchToProps=(dispatch)=>{
//     return{
//         gouwuche(list){
//             console.log(this)
//             dispatch({type:"GouWu",gg:list})
//         }
//     }
// }
// XiangXiang=connect(mapStateToProps,mapDisPatchToProps)(XiangXiang)
