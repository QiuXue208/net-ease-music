import React from 'react';
import './App.css';
import Header from './Header'
import Nav from  './Nav'
import RecommendationList from './RecommendationList'
import HotSong from './HotSong'
import Footer from './Footer'
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
        <HotSong />
        <Footer />
        <Search />
      </div>
    );
  }
}

export default App;
