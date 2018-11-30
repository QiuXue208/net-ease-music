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
  render() {
    return (
      <div className="App">
        <div className="topBar">
          <Header />
          <Nav />
        </div>
        <ul className="showList">
          <li className="show">
             <RecommendationList />
             <LatestSong />
             <Footer />
          </li>
          <li className="non-show">
             <HotSong />
          </li>
          <li className="non-show">
             <Search />
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
