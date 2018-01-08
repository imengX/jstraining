## Backbone

- 查看 页面使用#链接渲染页面
- 了解 Backbone 的使用方法
- 和微信小程序，Vue，ReactNative 的书写方式一致 可以形容为用Map包含一切
- 方法名是使用字符串绑定的

## Angular

- 双向绑定顾名思义。
- 使用 ng-model="name" 指定了key
- 使用 {{name}} 来替换内容 和模版 [mustache](https://mustache.github.io/) 一致

## Vue

- 同 Angular 的双向绑定类似 不同在于 引入js不同 Angular 在body前引入。Vue 在 body 结束标签 前引入
- 使用 v-model="message" 指定key
- 同 Angular 使用相同的 {{}} 替换内容


- eg1 除与 Angular 相同的基本特性外，Vue 还使用了外部js文件指定了 内容块message的初始值（通过eg2了解到不是初始值 这个值会随着 外部值修改而修改）

  ```
  var myViewModel = new Vue({
    el: '#my_view',
    data: myModel
  });

  var journal = new Vue({
    el: '#journal',
    data: {
      message: 'Your first entry'
    }
  });
  ```
- eg2 在 eg1 的基础上 介绍了 v-for 关键字 并且介绍了语法使用

  ```
  v-for="friend in friends | filterBy search in 'name'"> {{ friend.name }}
  ```
使用循环读取外部js文件中的值 并过滤出结果

  ```
    var myModel = {
    name: 'Ashley',
    age: 24,
    friends: [{
      name: 'Bob',
      age: 21
    }, {
      name: 'Jane',
      age: 20
    }, {
      name: 'Anna',
      age: 29
    }],
    search: ''
  };
  
  var myViewModel = new Vue({
    el: '#my_view',
    data: myModel
  });
  ```

- eg3 演示了通过方法更改js中的数据从而得到UI的更新

## JSX

- JSX与上面的完全不同 理解上是相当于iOS中从使用代码创建View
- 通过 babel 转换 JSX 

  ```
  <script type="text/babel">
    ReactDOM.render(
      <span>Hello React!</span>,
      document.getElementById('example')
    );
  </script>

  ```

## React 组件语法

- 使用 React.Component 建立自定义 html 标签构建组建使用

  ```
    class MyTitle extends React.Component {
      render() {
        return <h1>Hello World</h1>;
      }
    };

    ReactDOM.render(
      <MyTitle/>,
      document.getElementById('example')
    );

  ```

##React 组件的参数

- 使用 this.props 对象获取参数

  ```
    class MyTitle extends React.Component {
      render() {
        return <h1 style={{color: this.props.color}}>Hello World</h1>;
      }
    };
  
    ReactDOM.render(
      <MyTitle color="red" />,
      document.getElementById('example')
    );
  ```

## React 组件的状态

- constructor 方法 相当于init

  ```
    class MyTitle extends React.Component {
    constructor(...args) {
      super(...args);
      this.state = {
        name: '访问者'
      };
    }
    // ...
  ```
  
- this.state.name表示读取this.state的name属性。每当输入框有变动，就会自动调用onChange指定的监听函数，这里是this.handleChange，.bind(this)表示该方法内部的this，绑定当前组件。

  ```
  <div>
    <input
      type="text"
      onChange={this.handleChange.bind(this)}
    />
    <p>你好，{this.state.name}</p>
  </div>;
  ```

- this.state set时候会调用 ReactDOM.render 重新渲染 与小程序相同基本

  ```
    handleChange(e) {
      let name = e.target.value;
      this.setState({
        name: name
     });
  	}
  
  ```
  
##React 组件实战

感觉好像和 React 组件的状态 eg3 没什么区别

##React 组件的生命周期

一个React 使用的基本使用例子

利用 jquery 的请求 api $.getJSON(url) 实现请求
并且应该是使用了 ES6 的语法 (response => { })

使用数组的 [forEach()](http://javascript.ruanyifeng.com/stdlib/array.html#toc15) 方法 


  ```
    function log(element, index, array) {
      console.log('[' + index + '] = ' + element);
    }

    [2, 5, 9].forEach(log);
    // [0] = 2
    // [1] = 5
    // [2] = 9
    
  ```

使用{}取变量的值 html 可以直接写在 React JS 中

##ReCharts

使用

const {LineChart, Line, XAxis, YAxis, CartesianGrid} = Recharts;

引入库中的组建 引入之后的使用与自定义组件一致

##MobX

使用 npm 构建而不是 script 标签引入
使用 import 替代 const 引入组件

介绍了关键字 (mobx)

- @observer(观察者)
- @observable(被观察的属性)
- @computed(自动计算得到的属性)

##Redux

//TODO:不是特别懂 需要再理解 
应该是实现了分离
使用 mapStateToProps 映射绑定了 state 和 props
使用 mapDispatchToProps 映射绑定了 方法

##Simple App

npm的基本用法
package.json 的使用配置

easy as pie 

##REST API

了解 json-server 的使用
RESTAPI 的 get post put delete 

##Express

通过 Express 实现路由

思考题：Node 应用能否直接在80端口启动？

80端口需要root用户 非root用户端口限制在1024以上

##ESLint

代码检查工具的使用 

可以配置规则

使用 airbnb 的规则 eslint-config-airbnb-base

##Mocha

使用 Mocha 配合及断言库 Chai 实现单元测试

##Nightmare

Nightmare 应该属于界面操作方面的库
配合 Mocha 配合及断言库 Chai 实现单元测试
Nightmare 可以通过注入 (.evaluate) 来操作 浏览器 API

##Travis CI

配合 GitHub 实现自动运行测试脚本 