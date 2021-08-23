import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        /* users: [
            { id: '001', name: 'tom', age: 18 },
            { id: '002', name: 'jack', age: 19 },
            { id: '003', name: 'peiqi', age: 20 },
        ] */
        users:'abc'
    }
    render() {
        return (
            <div>
                <h3>我是Child组件</h3>
                {
                    this.state.users.map(user => {
                        return  <h4 key={user.id}>{user.name} ----- {user.age}</h4>
                    })
                }
            </div>
        )
    }
}
