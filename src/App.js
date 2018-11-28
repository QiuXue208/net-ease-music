import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Nav from  './Nav'
import RecommendationList from './RecommendationList'

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <div className="topBar">
          <Header />
          <Nav />
        </div>
        <RecommendationList />
      </div>
    );
  }
}

export default App;
