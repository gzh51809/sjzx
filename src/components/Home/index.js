import React,{ Component} from 'react';
import { Input,Carousel } from 'antd';
import './index.scss';
import axios from 'axios';
// import request from '../../helper.js'


const Search = Input.Search;
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
          users:[],
          isLoaded:false
        }
    }

        componentDidMount(){
            const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
            axios.get('http://localhost:3000/home-top.json')
            .then(function (response) {
                console.log(response.data);
              _this.setState({
                users:response.data,
                isLoaded:true
                
              });
            })
            .catch(function (error) {
            //   console.log(error);
              _this.setState({
                isLoaded:false,
                error:error
              })
            })
          }
        

    render () {
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
                        <div><h3>2</h3></div>
                        <div className="lunbo2"><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                    
                </div>
                <div className="circle-columns">
                    <ul>
                        <li><a href="/"><div className="tu2019"></div>
                        <div className="zi2019">
                            会员商城
                            </div>
                            </a></li>
                    </ul>

                    {/* {
                        this.state.user.map(menu=>{
                            return(
                            <ul>
                                <li><a href={item.mHref}><div className="tu2019"><img src={item.mImgUrl} /></div>
                                <div className="zi2019">
                                    {item.title}
                                    </div>
                                    </a></li>
                    </ul>)
                        })
                    } */}
                </div>

                <div className="news">

                </div>

                <div className="kuajing">

                </div>

                <div className="xinpin">

                </div>
            </div>
            
            )
            
                
            
        
    }
}
export default Home