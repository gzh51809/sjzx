import React,{ Component} from 'react';
import { Input,Icon } from 'antd';
import './classfiy.scss';
const Search = Input.Search;
class Classfiy extends Component{

    render () {
        return (
            <div>
            <div className="ctop">
            <div className="cctop">
                <span className="ctop1">
                <Icon type="home" />
                </span>
                <Search
                    placeholder="活灵魂干红葡萄酒"
                    onSearch={value => console.log(value)}
                    style={{ width: 280 }}
                    />
                <span className="ctop2"><Icon type="bars" /></span></div>
                <div className="tabtop">
                <ul>
                    <li>
                        
                    </li>
                </ul>
                </div>

                </div>
                </div>
        )
    }
}
export default Classfiy