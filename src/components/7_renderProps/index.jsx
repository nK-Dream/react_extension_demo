import React, { Component } from 'react'
import './index.css'
import C from '../1_setState/1_setState_Sync_Async'
export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h2>我是Parent组件</h2>
                <A render={(name)=><C name={name}/>}/>
            </div>
        )
    }
}

class A extends Component {
    state = {name:'tom'}
    render() {
        const {name} = this.state
        return (
            <div className='a'>
                <h2>我是A组件</h2>
                {this.props.render(name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='b'>
                <h2>我是B组件,{this.props.name}</h2>
            </div>
        )
    }
}