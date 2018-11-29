import React from 'react'
import './App.css'


class Nav extends React.Component{
    render(){
        const paragraphs = ['推荐音乐','热歌榜','搜索']
        const listItems = paragraphs.map((paragraph,index)=>{
            if(index === 0){
                return <li key={index} className="active"  onClick={this.props.handleChangeStyle}>{paragraph}</li>
            }
            return <li key={index}  onClick={this.props.handleChangeStyle}>{paragraph}</li> 
        })
        return (
            <nav className="navbar">
              <ul className="nav">
                 {listItems}              
              </ul>
            </nav>
        ) 
    }
}

export default Nav