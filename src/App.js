import React from 'react';
import './App.css';
import Header from './Header'
import Nav from  './Nav'
import RecommendationList from './RecommendationList'
import LatestSong from './LatestSong'
import Footer from './Footer'
import HotSong from './HotSong'
import Search from './Search'

class App extends React.PureComponent {
  constructor(){
    super()
    this.state ={
      currentIndex:0
    }
  }
  handleTabChange = (index)=>{
   /* const targetTag = document.querySelector(`.showList > li:nth-child(${index + 1})`)
    console.log(targetTag)
    const data =  parseInt(targetTag.getAttribute('data-key'),10)*/
    this.setState({
      currentIndex:index
    })
    /*console.log('currentIndex' + this.state.currentIndex)*/
  }
  render() {
    return (
      <div className="App">
        <div className="topBar">
          <Header />
          <Nav  handleTabChange={this.handleTabChange}/>
        </div>
        <ul className="showList" >
                    <li data-key="0" className={this.state.currentIndex === 0 ? 'show':'nonShow'}>
                        <RecommendationList />
                        <LatestSong />
                        <Footer />
                    </li>
                    <li data-key="1" className={this.state.currentIndex === 1 ? 'show':'nonShow'}>
                        <HotSong />
                    </li>
                    <li data-key="2" className={this.state.currentIndex === 2 ? 'show':'nonShow'}>
                        <Search />
                    </li>
        </ul>
      </div>
    );
  }
}

export default App;
