import React from 'react'
import './App.css'
import {Icon} from 'antd';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl:'//at.alicdn.com/t/font_939829_p8e2hr1ol2p.js'
})

class Song extends React.PureComponent{
    render(){
        return (
            <li>
              <a href="#" className="clearfix">
                  <div className="paragraph">
                     <h3>梦开始的地方</h3>
                     <p>
                       <IconFont type='icon-sq' className="iconfont"/>
                       <span>朱一龙/吉克隽逸/李菲儿-梦开始的地方</span>
                     </p>
                  </div>
                  <Icon className="icon" type="play-circle" />                        
              </a>
            </li>
        )
    }
}

export default Song