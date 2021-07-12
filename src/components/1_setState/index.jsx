import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        sum: 0
    }

    //add是由React控制的事件回调，setState是异步的
    add = () => {
        const { sum } = this.state;
        this.setState({ sum: sum + 1 });
        console.log(this.state.sum);
    }
    //componentDidMount是由React控制的生命周期钩子，setState是异步的
    componentDidMount() {
        const { sum } = this.state;
        this.setState({ sum: sum + 1 });
        console.log(this.state.sum);
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{this.state.sum}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}
