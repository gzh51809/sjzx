import React,{ Component} from 'react';
import { Input,Carousel } from 'antd';
import './index.scss';


const Search = Input.Search;
class Home extends Component{

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