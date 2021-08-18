import React, { Component } from 'react'
import './index.css'
export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h2>我是Parent组件</h2>
                <A>Hello!</A>
            </div>
        )
    }
}

class A extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div className='a'>
                <h2>我是A组件</h2>
                <B/>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='b'>
                <h2>我是B组件</h2>
            </div>
        )
    }
}