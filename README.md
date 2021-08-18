# React扩展

## 深入setState

    一、 setState更新状态是同步还是异步？--- 要看setState的执行位置

        (1). 在由react所控制的回调中更新的动作是【异步】的：生命周期钩子、react事件监听回调
        (2). 在非react控制的【异步回调】中更新的动作是【同步】的：定时器回调、原生事件回调、Promise回调

    二、setState的两种写法

        (1).对象式写法：setState(stateChange,[callback])
            1.stateChange为状态改变对象（该对象可以体现出状态的更改）
            2.callback是可选的回调函数，它在状态更新完毕、界面也更新后（render调用后）才被调用
        
        (2).函数式写法：setState(updater,[callback])
            1.updater为返回stateChange对象的函数
            2.updater可以接收到state和props
            3.callback是可选的回调函数，它在状态更新完毕、界面也更新后（render调用后）才被调用
    
    
    总结：
            1.对象式的setState是函数式的setState的简写方式（语法糖）
            2.使用原则：
                (1).如果新状态不依赖于原状态 ===> 使用对象方式
                (2).如果新状态依赖于原状态 ===> 使用函数方式
                (3).如果在setState执行后获取最新的状态数据，要在第二个callback函数中读取


## 路由组件的懒加载

    //1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
        const Login = lazy(import('xxx/xxxx/test'))

    //2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
        <Suspense>
            <Switch>
                <Router path="/xxx" component={Xxxx}>
                <Redirect to="/login">
            </Switch>
        </Suspense>
    
## Hooks

    1.React Hook/Hooks 是什么？
        (1). Hook是React 16.8.0版本增加的新特性/新语法
        (2). 可以让你在函数组件中使用 state 以及其他的React特性

    2.三个常用的Hook
        (1). State Hook: React.useState()
        (2). Effect Hook: React.useEffect()
        (3). Ref Hook: React useRef()

    3.State Hook
        (1). State Hook让函数组件也可以有state状态，并进行状态数据的读写操作
        (2). 语法：const [xxx, setXxx] = React.useState(initValue)
        (3). useState()说明：
            参数：第一次初始化指定的值在内部作缓存
            返回值：包含两个元素的数组，第一个为内部当前状态值，第二个为更新状态值的函数
        (4). setXxx() 两种写法：
            setXxx(newValue)：参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
            setXxx(value => newValue)：参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值
    
    4.Effect Hook
        (1). Effect Hook 可以让你在函数组件中执行副作用操作（用于模拟类组件中的生命周期钩子）
        (2). React中的副作用操作：
                发ajax请求数据获取
                设置订阅 / 启动定时器
                手动更改真实DOM
        (3). 语法和说明：
                useEffect(()=>{
                    //在此可以执行带副作用操作
                    return () => {//在组件卸载前执行
                        //在此做一些收尾工作，比如清除定时器/取消订阅等
                    }
                },[stateValue])//如果指定的是 [],回调函数只会在第一次render()后执行
        (4). 可以把 useEffect Hook 看做如下三个函数的组合
                componentDidMount()
                componentDidUpdate()
                componentWillUnmount()
    
    5.Ref Hook
        (1). Ref Hook可以在函数组件中存储/查找组件内的标签或其他任意数据
        (2). 语法 const refContainer = useRef()
        (3). 作用：保存标签对象，功能与React.createRef()一样

## Fragment
    1.使用：
        <Fragment key={1}><Fragment>
        <></>
    2.作用：可以不用必须有一个真实的DOM根标签了

## Context

### 理解
    一种组件间通信方式 常用语【祖祖件】 与 【后代组件】间通信
### 使用
    1) 创建Context容器对象：
        const XxxContext = React.createContext()

    2) 渲染子组件时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
        <xxxContext.provider value={数据}>
            子组件
        </xxxCountext.provider>

    3) 后代组件读取数据：
        //第一种方式：仅适用于类组件
        static contextType = xxxContext //声明接收context
        this.context //读取context中的value数据

        //第二种方式：函数组件与类组件都可以
        <xxxContext.Consumer>
            {
                value => (// value就是context中的value数据
                    要显示的内容
                )
            }
        </xxxContext.Consumer>   

### 注意
    在应用开发中一般不用context，一般都用它的封装react插件  


## 组件优化
### Component的两个问题
    1.只要执行setState(),即使不改变状态数据，组件也会重新render()
    2.只当前组件重新render(),就会自动重新render子组件，纵使子组件没有用到父组件任何数据 ==> 效率低

### 效率高的做法
    只有当组件的state或props数据发生改变时才重新render()

### 原因
    Component中的shouldComponentUpdate()总是返回true

### 解决
    办法1：
        重写shouldComponentUpdate()方法
        比较新旧state或props数据，如果有变化才返回true，没变化返回false
    办法2：
        使用PureComponent
        PureComponent重写了shouldComponentUpdate(),只有state或props数据有变化才返回true
        注意：
            只是进行state和props数据的浅比较，如果只是数据对象内部数据变了，返回false，不要直接修改state数据，而是要产生新数据
    项目中一般使用PureComponent来优化    

## render props
