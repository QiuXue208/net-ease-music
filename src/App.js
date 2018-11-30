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
        <RecommendationList />
        <LatestSong />
        <Footer />
        <HotSong />
        <Search />
      </div>
    );
  }
}

export default App;
