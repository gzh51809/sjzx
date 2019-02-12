import React,{ Component} from 'react';
import { Input,Carousel } from 'antd';
import './index.scss';
import axios from 'axios';
// import request from '../../helper.js'


const Search = Input.Search;
class Home extends Component{
    constructor(){
        super();
        this.state={
          users:[],
        
        }
        

 
    }
       componentDidMount(){
                    const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
                    axios.post('https://m.winex-hk.com/api/goods/index')
                    .then(function (response) {
                        console.log(response.data);
                        // return(response.data)
                      let ceshi =  response;
                        console.log(ceshi);
                    _this.setState({
                        
                         
                        
                    });
                    //   console.log(this.setState.users);

                    })
                    .catch(function (error) {
                    
                    
                        
                        console.log(error);
                    
                    })
                
                }

       
        

    render () {

        //  const liebiao= this.state.users.map((users,index) => {
        //     return (
        //         <li key={users.title}><a href="https://m.winex-hk.com/activity/fengjiubihai"><div className="tu2019"></div>
        //     <div className="zi2019">
        //         {users.title}
        //         </div>
        //         </a></li>
        //     )
        //     }) 
        
      
        return (
            <div>
                <div className="top">
                <span className="top1">
                    
                </span>
                <Search
                    placeholder="活灵魂干红葡萄酒"
                    onSearch={value => console.log(value)}
                    style={{ width: 230 }}
                    />
                <span className="top2"></span>
                </div>
                <div className="lunbo">
               
                    <Carousel autoplay>
                        <div className="lunbo2"><h3>1</h3></div>
                        <div className="lunbo2"><h3>2</h3></div>
                        <div className="lunbo2"><h3>3</h3></div>
                        <div className="lunbo2"><h3>4</h3></div>
                    </Carousel>
                    
                </div>
                <div className="circle-columns">
                    <ul>
                        
                        <li><a href="https://m.winex-hk.com/goods_t2"><div className="tu2019"></div>
                         <div className="zi2019">
                            会员商城
                            </div>
                             </a></li>
                             <li><a href="https://m.winex-hk.com/goods_t2"><div className="tu2019"></div>
                         <div className="zi2019">
                            会员商城
                            </div>
                             </a></li>
                             <li><a href="https://m.winex-hk.com/goods_t2"><div className="tu2019"></div>
                         <div className="zi2019">
                            会员商城
                            </div>
                             </a></li>
                             <li><a href="https://m.winex-hk.com/goods_t2"><div className="tu2019"></div>
                         <div className="zi2019">
                            会员商城
                            </div>
                             </a></li>
                             <li><a href="https://m.winex-hk.com/goods_t2"><div className="tu2019"></div>
                         <div className="zi2019">
                            会员商城
                            </div>
                             </a></li>
                             <li><a href="https://m.winex-hk.com/goods_t2"><div className="tu2019"></div>
                         <div className="zi2019">
                            会员商城
                            </div>
                             </a></li>
                             <li><a href="https://m.winex-hk.com/goods_t2"><div className="tu2019"></div>
                         <div className="zi2019">
                            会员商城
                            </div>
                             </a></li>
                             <li><a href="https://m.winex-hk.com/goods_t2"><div className="tu2019"></div>
                         <div className="zi2019">
                            会员商城
                            </div>
                             </a></li>
                          
                    </ul>

                </div>

                <div className="news">
                    通知:春节停止发货，春节后开始发货，祝大家新春快乐。

                </div>

                <div className="kuajing">
                    <h3>跨境商品</h3>
                </div>

                <div className="xinpin">
                    <h3>新品上市</h3>             
                </div>
                
                <div className="xinpin">
                    <h3>精选口粮</h3>             
                </div>
            </div>
            
            )
            
                
            
        
    }
}
export default Home