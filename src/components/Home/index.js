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
                    图标
                </span>
                <Search
                    placeholder="活灵魂干红葡萄酒"
                    onSearch={value => console.log(value)}
                    style={{ width: 260 }}
                    />
                <span className="top2">图标</span>
                </div>
                <div className="lunbo">
               
                    <Carousel autoplay>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                    
                </div>
            </div>
            
            )
            
                
            
        
    }
}
export default Home