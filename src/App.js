// 该文件为根组件

// 引入react
import React, { Component, Fragment } from 'react'
// 引入路由及相关
import { HashRouter as Router, Route } from 'react-router-dom';

// 引入相应的组件
import HKLayout from './components/HKLayout';


// 定义一个类组件
class App extends Component {
    // 挂载时的生命周期函数
    componentDidMount(){

    }

    render (){
        return (
            <Fragment>
                
            </Fragment>
        )
    }
}


// 把根组件暴露出去
export default App;
