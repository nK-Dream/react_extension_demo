import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        sum:0
    }
    add = () => {

        //对象式写法
        /* const {sum} = this.state
        this.setState({sum:sum+1}) */

        //函数式写法
        this.setState(state => ({sum:state.sum+1}))
    }
    change = () => {
        //当前状态不依赖于原状态，推荐使用对象式写法
        this.setState({sum:99})
    }
    render() {
        const {sum} = this.state;
        return (
            <div>
                <h2>当前求和为{sum}</h2>
                <button onClick = {this.add}>点我+1</button>
                <button onClick = {this.change}>点我更改和为99</button>
            </div>
        )
    }
}
