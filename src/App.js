import React from 'react';
import './App.css';
import Header from './Header'
import Nav from  './Nav'
import RecommendationList from './RecommendationList'
import HotSong from './HotSong'
import Footer from './Footer'

class App extends React.PureComponent {
  handleChangeStyle = (e)=>{
    console.log(e.target.ParentNode.children)
     e.target.className='active'
  }
  render() {
    return (
      <div className="App">
        <div className="topBar">
          <Header />
          <Nav handleChangeStyle={this.handleChangeStyle} />
        </div>
        <RecommendationList />
        <HotSong />
        <Footer />
      </div>
    );
  }
}

export default App;
