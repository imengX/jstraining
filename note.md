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