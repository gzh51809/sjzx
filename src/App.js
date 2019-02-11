import React, { Component } from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import AppHome from './components/Home'
import AppClassfiy from './components/Classfiy'
import AppMine from './components/Mine'
import AppFlashgo from './components/Flashgo'

import AppCart from './components/Cart'

// 引入antd样式
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import './app.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      menu:[
        {
          text:'首页',
          path:'/home',
          name:'Home',
          icon:'home'
        },
        {
          text:'分类',
          path:'/classfiy',
          name:'Classfiy',
          icon:'bars'
        },
        {
          text:'闪购',
          path:'/flashgo',
          name:'Flashgo',
          icon:'bell'
        },
        {
          text:'购物车',
          path:'/cart',
          name:'Cart',
          icon:'shopping-cart'

        },
        {
          text:'我的',
          path:'/mine',
          name:'Mine',
          icon:'user'
        },
       ],
       current:'/Home' 
    }
      //this绑定
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange({item,key,selectedKeys}){
    // console.log(item,key,selectedKeys)
    this.setState({
      current:key
    })
    this.props.history.push(key)
  }
  render() {
    return (
      <div className="App">
     
      <div className="footer"> <Menu mode="horizontal"
      selectedKeys={[this.state.current]}
      onClick={this.handleChange}
      >
        {
          this.state.menu.map(menu=>{
            return(
            <Menu.Item key={menu.name}><div>
            <Icon type={menu.icon}/>
            <div className="mingzi">{menu.text}</div>
            </div>
            </Menu.Item>
            )
          })
        }
      </Menu>
        <Switch>
          <Route path="/home" component = {AppHome} />
          <Route  path="/classfiy" component = {AppClassfiy} />
          <Route  path="/flashgo" component = {AppFlashgo} />
          <Route  path="/cart" component = {AppCart} />
          <Route  path="/mine" component = {AppMine} />
          <Redirect from="/" to="/home"/>
        </Switch></div>
     
      </div>
    );
  }
}
App = withRouter(App);

export default App;
