import React from 'react'
import ReactDOM from 'react-dom'

//类式写法
/* class Demo extends React.Component {
    state = { count: 0 }
    myRef = React.createRef()
    add = () => {
        this.setState(state => ({ count: state.count + 1 }))
    }
    show = () => {
        alert(this.myRef.current.value)
    }
    unmount = () => {
        ReactDOM.unmountComponentAtNode(document.querySelector("#root"))
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(state => ({ count: state.count + 1 }))
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.myRef} />
                <h2>当前求和为{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.unmount}>卸载组件</button>
                <button onClick={this.show}>点我提示数据</button>
            </div>
        )
    }
} */

//函数式写法
function Demo() {

    const [count, setCount] = React.useState(0)
    const [person, setPerson] = React.useState({ name: 'tom', age: 18 })
    const myRef = React.useRef()

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            //该函数相当于 componentWillUnmount
            clearInterval(timer)
        }
    }, [])

    function add() {
        //两种写法
        //setCount(count + 1);
        setCount(count => count + 1)
    }
    function show() {
        alert(myRef.current.value)
    }
    function changeName() {
        setPerson({ ...person, name: 'jake' })
    }

    function unmount() {
        ReactDOM.unmountComponentAtNode(document.querySelector("#root"))
    }

    return (
        <div>
            <input type='text' ref={myRef} />
            <h2>当前求和为{count}</h2>
            <h2>我的名字是{person.name},我的年龄是{person.age}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={changeName}>点我改名</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}

export default Demo