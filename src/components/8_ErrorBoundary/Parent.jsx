import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state={
        hasError:''
    }
    static getDerivedStateFromError(error){
        console.log(error);
        return {hasError:error}
    }

    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {this.state.hasError ? <h3>当前网络不稳定，请稍后再试</h3> : <Child />}
            </div>
        )
    }
}
