import React from 'react'
import Song from './Song'
import '../App.css'

class LatestSong extends React.PureComponent{
    render(){
        return (
            <section>
               <h2>最新音乐</h2>
               <ul className="latestSongList">
                   <Song />
                   <Song />
                   <Song />
                   <Song />
                   <Song />
               </ul>
            </section>
        )
    }
}

export default LatestSong