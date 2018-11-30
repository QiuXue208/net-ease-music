import React from 'react'
import './App.css'


class Nav extends React.Component{
    constructor(){
        super()
        this.state = {
            currentIndex:0
        }
    }
    handleChangeStyle = (index)=>{
           this.setState({
               currentIndex:index
           })
    }
    render(){
        const paragraphs = ['推荐音乐','热歌榜','搜索']
        const listItems = paragraphs.map((paragraph,index)=>{
            return <li className={this.state.currentIndex===index?'active':'non-active'} onClick={()=>this.handleChangeStyle(index)}>{paragraph}</li> 
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