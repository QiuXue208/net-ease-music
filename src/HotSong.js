import React from 'react'
import './App.css'

class HotSong extends React.PureComponent{
    render(){
        return (
            <div className="hotSong">
                <div className="hotSongContainer">
                   <div className="hotSongIcon"></div>
                   <div className="updateDate">更新日期:11月30日</div>
                </div>
            </div>
        )
    }
}

export default HotSong