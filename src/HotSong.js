import React from 'react'
import Song from './Song'
import './App.css'

class HotSong extends React.PureComponent{
    render(){
        return (
            <section>
               <h2>最新音乐</h2>
               <ul className="hotsonglist">
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

export default HotSong