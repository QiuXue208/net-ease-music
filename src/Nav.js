import React from 'react'
import './App.css'


class Nav extends React.Component{
    render(){
        return (
            <nav className="navbar">
              <ul className="nav">
                  <li>推荐音乐</li> 
                  <li>热歌榜</li> 
                  <li>搜索</li>                  
              </ul>
            </nav>
        )
    }
}

export default Nav