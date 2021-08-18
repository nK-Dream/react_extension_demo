import React, { PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {
    state = {
        carName:'奔驰c63'
    }
    changeCar = () => {
        this.setState({carName:'迈巴赫'})
    }
    /* shouldComponentUpdate(nextProps,nextState){
        return !nextState.carName === this.state.carName
    } */
    render() {
        console.log('Parent--render')
        const {carName} = this.state
        return (
            <div className="parent">
                <h2>我是Parent组件</h2>
                <h3>我的车是{carName}</h3>
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName='奥拓'/>
            </div>
        )
    }
}

class Child extends PureComponent {
    /* shouldComponentUpdate(nextProps, nextState) {
        return !nextProps.carName === this.props.carName
    } */
    render() {
        console.log('Child--render')
        return (
            <div className="child">
                <h2>我是Child组件</h2>
                <h3>我接收到的车是{this.props.carName}</h3>  
            </div>
        )
    }
}