import React from 'react'
import './App.css'
import { Icon } from 'antd'

class Search extends React.PureComponent{
    render(){
        return (
            <form>
                <div className="formContainer">
                   <Icon className="searchIcon" type="search" />
                   <input className="search" type="search" />
                   <label>搜索歌曲、歌手、专辑</label>
                   <Icon className="closeIcon" type="close" />
                </div>
            </form>
        )
    }
}

export default Search